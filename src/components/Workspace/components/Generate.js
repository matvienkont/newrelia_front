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
        cntWeight,
        styleWeight,
        TVWeight,
        TemporalWeight
    }
    
    return (
        <React.Fragment>
        <div className="generate-button-container">
            <div className="generate-button" onClick={() => sendServerRequest(socket, socketConnected, inputFiles, options)}><span>Send Request</span></div>
        </div>
        </React.Fragment>
    );
}

export default Generate;