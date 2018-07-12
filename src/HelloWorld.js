import React, { Component } from 'react';

class HelloWorld extends Component {
	render() {

		const result = 4
		const style = {
			color: '#f00',
			fontSize: 50,
			BackgroundColor: '#000'
		}

		return (
			<div className="my-class-from-react">
				<h1 style={style}>Hello World from React.js</h1>
				<h4>{ result === 2 * 2 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div> }</h4>
			</div>
		);
	}
}

export default HelloWorld