import React, { useEffect, useRef, useState } from "react";
import showImageOnUpload from "./processInput/showImageOnUpload";
import Generate from "./iniateGeneneration/Generate";
import "./Workspace.css"

const Workspace = () =>
{
    var [socketConnected, setSocketConnection] = useState(false);

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

        return () => socket.current.close();
    }, [])


    return (
            <React.Fragment>
                <input id="fileInput" type="file" onChange={() => showImageOnUpload(this)} accept='image/*'/>
                <div id="collage-container"></div>
                <Generate 
                    socket={socket}
                    socketConnected={socketConnected}
                />
            </React.Fragment>    
		);
}

export default Workspace;