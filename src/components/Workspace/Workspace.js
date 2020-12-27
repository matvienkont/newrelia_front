import React, { useEffect, useRef, useState } from "react"
import Generate from "./components/Generate";
import "./Workspace.css"
import customFileInput from "./processInput/custom-file-input" 
import InputFields from "./components/InputFields"
import Result from "../../media/result.png"
import { SlidersCompound } from "./components/SlidersCompound"


const Workspace = () =>
{
    var [socketConnected, setSocketConnection] = useState(false);
    var [inputFiles, setInputFiles] = useState([null, null]);

    var endpoint = "ws://127.0.0.1:8000/websocket";
    const socket = useRef(null);

    useEffect(()=>
    {
        socket.current = new WebSocket(endpoint);

        socket.current.onmessage = function(e) {
            console.log("message", e);
        }
        socket.current.onopen = function(e) {
            console.log("HEY");
            setSocketConnection(true);
            console.log("message", e);
        }
        socket.current.onerror = function(e) {
            console.log("message", e);
        }
        socket.current.onclose = function(e) {
            console.log("message", e);
        };

        customFileInput(document, window, 0)

        return () => socket.current.close();
    }, [])


    return (
            <React.Fragment>
                <div className="wrapper">
                    <InputFields setInputFiles={setInputFiles.bind(this)} inputFiles={inputFiles}/>
                    <div className="middle-container">
                        <div className="sliders-container">
                            <SlidersCompound />
                        </div>
                        <div className="output-wrapper">
                            <img className="output-img" src={Result}/>
                        </div>
                    </div>
                    <div id="collage-container"></div>
                    <Generate 
                        socket={socket}
                        socketConnected={socketConnected}
                        inputFiles={inputFiles}
                    />
                </div>
            </React.Fragment>
		);
}

export default Workspace;