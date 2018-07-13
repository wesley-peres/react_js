import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HelloWorld txt="Hello World from React.js" />, 
	document.getElementById('root')
);