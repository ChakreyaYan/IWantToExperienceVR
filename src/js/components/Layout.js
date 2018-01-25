import React from "react";
import ReactPlayer from 'react-player';
import ReactCursorPosition from 'react-cursor-position';

export default class Layout extends React.Component {

constructor(props) {
  super(props);

  this.state = {x: 0, y: 0, name: 'Gold', duration: 0, currentTime: 0};
}

onMouseMove(e) {

console.log('X: ' + this.state.x + ' Y: ' + this.state.y);
this.setState({x : e.nativeEvent.offsetX, y : e.nativeEvent.offsetY});

}

onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration });
  }

getCurrentTime = (seconds) => {
                        
this.setState({
currentTime : seconds,               
});
}

  render() {

    const { x, y, duration, currentTime } = this.state; 

    
    console.log('X: ' + this.state.x + ' Duration: ' + this.state.duration + ' Current Play Time: ' + this.currentTime);   
                
    return (
      <div>
        <h1> Current Coordinates: {x} {y} </h1>
        <ReactPlayer onMouseMove = {this.onMouseMove.bind(this)}
        ref = {'player'}
        url = {'../static assets/Intro_Stephen.mp4'} 
        onClick = {() => alert('X: ' + this.state.x)}
        onDuration = {this.onDuration}
        onCurrentTime = {this.getCurrentTime}
        controls = {true} 
        height = {320}
        width = {640}
        /> 


    
      </div>
    );
  }


}