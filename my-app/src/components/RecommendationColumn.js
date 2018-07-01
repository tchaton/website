import React from 'react';
import ReactDOM from 'react-dom';
var randomColor = require('randomcolor');


class RecommendationColumn extends React.Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<div style={{'height':'200px', 'width':'200px', 'backgroundColor': 'yellow'}}>
				{this.props.value}
			</div>
		);
	}
}

export default RecommendationColumn;