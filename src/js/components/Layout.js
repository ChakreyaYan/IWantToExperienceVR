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

        //For some reason adding drawings to the canvas is 300 by 150 so the below calculates percentage across the video
        //player that the click is and then is utilised in the draw when applied to the smaller canvas dimensions.
        var x = e.nativeEvent.offsetX / 576; //width of canvas/video player
        var y = e.nativeEvent.offsetY / 288; //height of canvas/video player

        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears panel
        ctx.fillStyle = "#A657E8";

        var arrayLength = this.state.panels.length;
        for (var i = 0; i < arrayLength; i++)
        {
            var x2 = this.state.panels[i].video1.hotspots.video1.x / 576;
            var y2 = this.state.panels[i].video1.hotspots.video1.y / 288;

            ctx.fillRect(300 * x2 - 5, 150 * y2 - 5, 10, 10);
        }

        ctx.fillStyle = "#E5C5FF";
        ctx.fillRect(300 * x - 5, 150 * y - 5, 10, 10);
    }

    saveHotspot(e) {
        var name = document.getElementById("hotspotname").value;
        const newarray = {"video1":{"video": "Intro_Stephen.mp4", "is_stereo": true, "hotspots":{"video1":{"pitch": (180 - ((this.state.x /8) * 5)), "yaw": (90 - ((this.state.y /8) * 5)), "radius": 0.05, "distance": 1, "name": name, "x": this.state.x, "y": this.state.y, "time": this.state.currentTime}}}}
        this.state.panels.push(newarray);

        //Refresh panel
        var myNode = document.getElementById("testelement");
        myNode.innerHTML = '';
        var arrayLength = this.state.panels.length;
        for (var i = 0; i < arrayLength; i++)
        {
            var node = document.createElement("LI");
            var textnode = document.createTextNode("Hotspot " + (i + 1) + ":   X = " + this.state.panels[i].video1.hotspots.video1.x + "   Y = " + this.state.panels[i].video1.hotspots.video1.y + "   Name = " + this.state.panels[i].video1.hotspots.video1.name + "   Time = " + this.state.panels[i].video1.hotspots.video1.time);
            node.appendChild(textnode);
            document.getElementById("testelement").appendChild(node);
        }

        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears panel
        ctx.fillStyle = "#A657E8";

        var arrayLength = this.state.panels.length;
        for (var i = 0; i < arrayLength; i++)
        {
            var x2 = this.state.panels[i].video1.hotspots.video1.x / 576;
            var y2 = this.state.panels[i].video1.hotspots.video1.y / 288;

            ctx.fillRect(300 * x2 - 5, 150 * y2 - 5, 10, 10);
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
                <div>
                <ReactPlayer onClick = {this.onClick.bind(this)}
                             ref = "player"
                             controls = {true}
                             url = {'../static assets/Intro_Stephen.mp4'}
                             onDuration = {this.onDuration}
                             onProgress = {this.onProgress}
                             height = {288} //Size is specifically made (180 / 5 * 8)
                             width = {576} //Size is specifically made (360 / 5 * 8)
                />
                    <canvas id = 'mycanvas' className='overlay'>
                    </canvas>
                </div>

                <div class = "button">
                    <Button value = 'Save Hotspot' clickHandler = {this.saveHotspot.bind(this)} />
                    <Button value = 'Download JSON' clickHandler = {this.downloadJSON.bind(this)} />
                    <h2>name</h2>
                    <input type="text" name="Name" id = 'hotspotname' ></input>
                </div>
            </div>
        );
    }
}
