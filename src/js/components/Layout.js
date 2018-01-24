import React from "react";
import ReactPlayer from 'react-player';
import ReactCursorPosition from 'react-cursor-position';

export default class Layout extends React.Component {

constructor(props) {
  super(props);

  this.state = {x: 0, y: 0, name: 'Gold'};
}

onMouseMove(e) {

console.log('X: ' + this.state.x + ' Y: ' + this.state.y);
this.setState({x : e.nativeEvent.offsetX, y : e.nativeEvent.offsetY});


}

  render() {

    const { x, y } = this.state; 
    console.log(this.state.x);         
                
    return (
      <div>
        <h1> Current Coordinates: {x} {y} </h1>
        <ReactPlayer onMouseMove = {this.onMouseMove.bind(this)}
        url = {'../static assets/Intro_Stephen.mp4'} 
        onClick = {() => alert('X: ' + this.state.x)}
        controls = {true} 
        height = {320}
        width = {640}
        /> 


    
      </div>
    );
  }


}