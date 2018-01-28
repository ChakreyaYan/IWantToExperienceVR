import React from 'react';
import Button from 'simple-react-button';
import Layout from './Layout';

export default class LayoutTwo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {x: 0, y: 0, duration: 0, currentTime: 0, fieldVal: ""};
		this.state = {panels: []};
	}

	

onButtonClick(e) {
  
  
  this.state.panels.push(this.state.x, this.state.y, this.state.currentTime);  
  console.log(this.state.panels);
}

onUpdate = (val) => {
	this.setState({fieldVal : val});
}








	render() {


		const { x, y, duration, currentTime } = this.state; 

		return(
			<div>
			
			<h1> Submit A Hotspot </h1>
			<div class = "button">
        	<Button value = 'Submit A Hotspot' 
        	clickHandler = {this.onButtonClick.bind(this)} 
        	class = 'submitButton'
        	/>
        	<h1> Name A Hotspot </h1>
        	<input 
			placeholder = "enter text"
			class = "hotspotInput"
        	/>

        	</div>
			</div>


			);
	}




}

LayoutTwo.defaultProps = {
  fuckingName: 'LayoutTwo',
  newX: 24,
  occupation: 'Goldsmith'
};

