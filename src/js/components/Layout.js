import React from "react";
import ReactPlayer from 'react-player';
import ReactCursorPosition from 'react-cursor-position';
import Button from 'simple-react-button';

export default class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {x: 0, y: 0, duration: 0, currentTime: 0};
        this.state = {panels : []};
    }

    onClick(e) {
        this.setState({x : e.nativeEvent.offsetX, y : e.nativeEvent.offsetY});
    }

    saveHotspot(e) {
        const newarray = {"video1":{"video": "Intro_Stephen.mp4", "is_stereo": true, "hotspots":{"video1":{"pitch": (180 - this.state.x), "yaw": (90 - this.state.y), "radius": 0.05, "distance": 1}}}}
        const array = {x: (180 - this.state.x), y: (90 - this.state.y), time: this.state.currentTime, name: "blank"}
        this.state.panels.push(newarray);

        //Refresh panel
        var myNode = document.getElementById("testelement");
        myNode.innerHTML = '';
        var arrayLength = this.state.panels.length;
        for (var i = 0; i < arrayLength; i++)
        {
            var node = document.createElement("LI");
            //var textnode = document.createTextNode("Hotspot " + (i + 1) + ":   X = " + this.state.panels[i].x + "   Y = " + this.state.panels[i].y + "   Time = " + this.state.panels[i].time + "   Name = " + this.state.panels[i].name);
            var textnode = document.createTextNode("tits");
            node.appendChild(textnode);
            document.getElementById("testelement").appendChild(node);
        }
    }

    downloadJSON(e) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.panels));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", "hotspots.json");
        dlAnchorElem.click();

        localStorage.setItem("key", dataStr);
    }

    nameHotspot(e) {
        var index = parseInt(document.getElementById("hotspotnumber").value);
        var name = document.getElementById("hotspotname").value;
        this.state.panels[index - 1].name = name;

        //Refresh panel
        var myNode = document.getElementById("testelement");
        myNode.innerHTML = '';
        var arrayLength = this.state.panels.length;
        for (var i = 0; i < arrayLength; i++)
        {
            var node = document.createElement("LI");
            var textnode = document.createTextNode("Hotspot " + (i + 1) + ":   X = " + this.state.panels[i].x + "   Y = " + this.state.panels[i].y + "   Time = " + this.state.panels[i].time + "   Name = " + this.state.panels[i].name);
            node.appendChild(textnode);
            document.getElementById("testelement").appendChild(node);
        }
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

        return (

            <div>
                <h1> Current Coordinates hi test: {x} {y} Time : {currentTime} </h1>
                <ReactPlayer onClick = {this.onClick.bind(this)}
                             ref = "player"
                             url = {'../static assets/Intro_Stephen.mp4'}
                             onDuration = {this.onDuration}
                             onProgress = {this.onProgress}
                             height = {180}
                             width = {360}
                />
                <div class = "button">
                    <Button value = 'Save Hotspot' clickHandler = {this.saveHotspot.bind(this)} />
                    <Button value = 'Download JSON' clickHandler = {this.downloadJSON.bind(this)} />
                    <Button value = 'Name Hotspot' clickHandler = {this.nameHotspot.bind(this)} />

                </div>
            </div>
        );
    }
}
