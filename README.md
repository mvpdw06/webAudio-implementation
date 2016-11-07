# React and webpack with hot-reload practice

## Targets

1. React app.
2. Babel to parse ES6+ to ES5.
3. Bundle all JavaScript files in one output .js file.
4. Use EsLint to create front-end coding rules for all co-work developers.
5. Using webpack-hot-module-replacement
6. Using react-hot-loader

## Requirements

1. node.js (npm) in your computer.
2. webpack gobal command 

```
$ npm install webpack -g
```

## Dependencies

1. webpack
2. webpack-dev-server
3. babel-cli
4. babel-loader
5. babel-preset-es2015
6. babel-preset-react
7. babel-preset-stage-0
8. react
9. react-dom
10. react-hot-loader

## Run / Develop this app

1. Download this repository zip file and extract as a folder.
2. Use command(windows) / terminal(OSX or Linux) shell to cd this folder.
3. Command "npm install" to install all plungin.
4. Command "npm run dev" to develope this app with hot-reload.
5. Run 'http://localhost:3000' in browser.

## Generate production code

> don't forget to run "npm install" first.

1. Command "npm run build" to bundle .js file to production code.

## File description

### { package.json }

1. Describe your project, and let npm know what plungins it should to install. 
2. Define script shortcut of your project.

### { .babelrc }

1. Define babel presettings of your project.
2. Plungins with Babel like react-hot-loader.

### { webpack.config.babel.js }

1. Define webpack entry, output, plungins and loaders.
2. Define webpack's behavior on development or production.

### { .eslintrc }

1. Rule coding style in ide plungin(ex: ESLint of Sublime Text 3).
2. See more setting in [ESLint 詳細設定說明](https://github.com/mvpdw06/reading-notes/issues/10)

### { devServer.js }

1. define your development behavior on your localhost with webpack-dev-server.

### { all .js files }

1. **import** and **export** in all .js files is let Webpack to build dependency in your bundle.js.

### { more description }

* you can see more description in [Webpack settings](https://paper.dropbox.com/doc/Webpack-settings-q3GoQESGeIGOG1TlORcuN)

## References

* [ESLint rules settings](http://eslint.org/docs/rules/)
* [Webpack guides](https://webpack.github.io/docs/)
* [React Hot Loader](https://gaearon.github.io/react-hot-loader/getstarted/)

## Special thanks

* [shiningjason1989](https://github.com/shiningjason1989) help me to set this project and told me how to use it.
