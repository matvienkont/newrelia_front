import React from "react";
import sendServerRequest from "./generateProcedure/sendServerRequest";
import "./Generate.css";

export const Generate = (props) => 
{
    
    var {
        socket,
        socketConnected,
        inputFiles,
        checked,
        pooling,
        cntWeight,
        styleWeight,
        TVWeight,
        TemporalWeight
    } = props;

    const options = {
        checked,
        pooling,
        styleWeight,
        TVWeight,
        TemporalWeight
    }
    
    return (
        <React.Fragment>
        <div className="generate-button-container">
            <div className="generate-button" id="generate-button-id" onClick={() => sendServerRequest(socket, socketConnected, inputFiles, options)}><span id='generate-button-text'>Generate image</span></div>
        </div>
        </React.Fragment>
    );
}

export default Generate;