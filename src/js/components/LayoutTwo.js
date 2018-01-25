import React from 'react';
import Button from 'simple-react-button';

export default class LayoutTwo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {x: 10, y: 10, duration: 1000, currentTime: 1000};
		this.state = {panels: []};
	}





onButtonClick(e) {
  
  this.state.panels.push(this.state.x, this.state.y, this.state.currentTime);  
  console.log(this.state.panels);
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
			value = "Hotspot Name"
			class = "hotspotInput"
        	/>

        	</div>
			</div>


			);
	}


}