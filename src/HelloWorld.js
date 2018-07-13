import React, { Component } from 'react'

import StateInput from './StateInput'

class HelloWorld extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Wesley Peres'
		}
	}

	render() {
		const result = 4
		const style = {
			color: '#f00',
			fontSize: 50,
			BackgroundColor: '#000'
		}

		return (			
			<div className="my-class-from-react">
				{ /* This is my first component */ }
				<StateInput />
				<h1 style={style}>Hello World from React.js</h1>
				<h4>{ result === 2 * 2 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div> }</h4>
				<span>{ this.state.name }</span>
			</div>
		);
	}
}

export default HelloWorld