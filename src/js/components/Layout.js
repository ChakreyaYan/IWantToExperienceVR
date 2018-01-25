import React from "react";
import ReactPlayer from 'react-player';
import ReactCursorPosition from 'react-cursor-position';

export default class Layout extends React.Component {

constructor(props) {
  super(props);

  this.state = {x: 0, y: 0, duration: 0, currentTime: 0};
}

onClick(e) {

this.setState({x : e.nativeEvent.offsetX, y : e.nativeEvent.offsetY});

}


onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration });
}


 onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
    this.setState({currentTime : this.state.playedSeconds});
    console.log(this.state.currentTime);

  }



  render() {

    const { x, y, duration, currentTime } = this.state; 

    
    console.log('X: ' + this.state.x + ' Duration: ' + this.state.duration + ' Current Play Time: ' + this.state.currentTime);  
                
    return (
      <div>
        <h1> Current Coordinates: {x} {y} Time : {currentTime} </h1>
        <ReactPlayer onClick = {this.onClick.bind(this)}
        ref = "player"
        url = {'../static assets/Intro_Stephen.mp4'} 
        onDuration = {this.onDuration}
        onProgress = {this.onProgress}
        controls = {true} 
        height = {320}
        width = {640}
        /> 



    
      </div>
    );
  }


}