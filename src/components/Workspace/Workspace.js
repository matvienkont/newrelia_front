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

    //
    const [checked, setChecked] = React.useState(false);
    const [pooling, setPooling] = React.useState('avg');
    const [cntWeight, setCntWeight] = React.useState(5);
    const [styleWeight, setStyleWeight] = React.useState(10000);
    const [TVWeight, setTVWeight] = React.useState(0.001);
    const [TemporalWeight, setTemporalWeight] = React.useState(200);

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
                            <SlidersCompound 
                                checked={checked}
                                setChecked={setChecked}
                                pooling={pooling}
                                setPooling={setPooling}
                                setCntWeight={setCntWeight}
                                setStyleWeight={setStyleWeight}
                                setTVWeight={setTVWeight}
                                setTemporalWeight={setTemporalWeight}
                            />
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
                        checked={checked}
                        pooling={pooling}
                        cntWeight={cntWeight}
                        styleWeight={styleWeight}
                        TVWeight={TVWeight}
                        TemporalWeight={TemporalWeight}
                    />
                </div>
            </React.Fragment>
		);
}

export default Workspace;