import React from 'react';
import Button from './Button';
import Title from './Title';
import Paint from './Paint';

const context = new AudioContext();
var sourceNode = null;

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		fetch('lonelypatient.mp3')
			.then((response) => response.arrayBuffer())
			.then((fileBuffer) => {
				context.decodeAudioData(fileBuffer, (audioData) => {
					this.setState({
						startedAt: 0,
						pausedAt: 0,
						playing:false,
						buffer: audioData,
					});
				});
				console.warn('compeleted');
			});
	}
	_clickToRock() {
		const {
			playing,
			pausedAt,
			startedAt,
			buffer
		} = this.state;

		if(playing) {
			console.log('rock pause');
			let elapsed = context.currentTime - startedAt;
	        this._clickToStop();
	        this.setState({
	        	pausedAt: elapsed
	        })
		}
		else {
			console.log('rock play');
			let offset = pausedAt;
	        sourceNode = context.createBufferSource();
	        sourceNode.connect(context.destination);
	        sourceNode.buffer = buffer;
	        sourceNode.start(0, offset);

			this.setState({
				startedAt: context.currentTime - offset,
	        	pausedAt: 0,
	        	playing: true,
			});
		}
	}
	_clickToStop() {
		console.log('stop');

		if (sourceNode) {
            sourceNode.disconnect();
            sourceNode.stop(0);
            sourceNode = null;
        }
        this.setState({
        	pausedAt: 0,
	        startedAt: 0,
	        playing: false
        });
	}
	render() {
		return (
			<div>
				<Title>Let's rock!</Title>
				<Button onClick={this._clickToRock.bind(this)}>{'Rock'}</Button>
				<Button primary onClick={this._clickToStop.bind(this)}>Stop!</Button>
				<Paint></Paint>
			</div>
		);
	}
}