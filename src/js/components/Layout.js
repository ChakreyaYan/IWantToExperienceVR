import React from "react";
import ReactPlayer from 'react-player';
import ReactCursorPosition from 'react-cursor-position';
import Button from 'simple-react-button';
import PropTypes from 'react';

export default class Layout extends React.Component {

constructor(props) {
  super(props);

  this.state = {x: 0, y: 0, duration: 0, currentTime: 0, fieldVal: ''};
  this.state = {firstArray : [], secondArray : []};

}

 componentWillReceiveProps(props) {
    console.log('Will receive props')
  }


onClick(e) {

this.setState({x : e.nativeEvent.offsetX, y : e.nativeEvent.offsetY});


}

onButtonClick(e) {
  
  this.state.firstArray.push(this.state.fieldVal, this.state.x, this.state.y, this.state.currentTime);  
  this.state.secondArray.push(this.state.firstArray);
  this.setState({firstArray: []});
  console.log(this.state.firstArray);
  console.log(this.state.secondArray);


}


onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration });
}

update = (e) => {
console.log(e.target.value);
this.setState({fieldVal : e.target.value});
}


 onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
    this.setState({currentTime : this.state.playedSeconds + 's'});
    console.log(this.state.currentTime);

  }

  

  render() {

    const { x, y, duration, currentTime, fieldVal } = this.state; 
   
    console.log('X: ' + this.state.x + ' Duration: ' + this.state.duration + ' Current Play Time: ' + this.state.currentTime);  
                
    return (
      <div class = "layoutDiv">
        <h1 className = "hotspotTitle"> Hotspot Title: {fieldVal} </h1>
        <h1 className = "hotspotTitle"> Current Coordinates: X: {x} Y: {y} Time : {currentTime} </h1>
        <ReactPlayer onClick = {this.onClick.bind(this)}
        ref = "player"
        url = {'../static assets/Intro_Stephen.mp4'} 
        onDuration = {this.onDuration}
        onProgress = {this.onProgress}
        controls = {true} 
        height = {320}
        width = {640}
        /> 


        <h3 className = "inputHeader"> Name a Hotspot </h3>
        
              <input 
                class = "hotspotInput"
                placeholder = "type here"
                onChange = {this.update}
                className = "inputField"
              />
              <br></br>

        <h3 className = "buttonHeader"> Submit A Hotspot </h3>

              <Button value = 'Click me' clickHandler = {this.onButtonClick.bind(this)} className = "inputButton"/>
        
      </div>
    );
  }


}

Layout.defaultProps = {
  name: 'Jack',
  newX: 24,
  occupation: 'Goldsmith'
};

