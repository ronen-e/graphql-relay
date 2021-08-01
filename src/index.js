import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';

const render = () => {
	const mountNode = document.getElementById('root');
	ReactDOM.render(
		<App />,
		mountNode
	);
};

render();

if (module.hot) {
	module.hot.accept('./App', render);
}