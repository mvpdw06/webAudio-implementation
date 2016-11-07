import { render } from 'react-dom';
import React from 'react';
import App from './components/app';
import { AppContainer } from 'react-hot-loader';
import 'whatwg-fetch';

const rootElement = document.getElementById('app');

render(
	<AppContainer>
		<App />
	</AppContainer>,
	rootElement
);

if (module.hot) {
	module.hot.accept('./components/app', () => {
		const NextApp = require('./components/app').default;
		render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			rootElement
		);
	});
}

