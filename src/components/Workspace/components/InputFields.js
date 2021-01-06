import React from "react";
import img_place_holder from "../../../media/img-placeholder.png"
import showImageOnUpload from "../processInput/showImageOnUpload"
import changeInputFilesState from "../processInput/changeInputFilesState"
import "./InputFields.css";

export const InputFields = (props) => 
{

    const {
        setInputFiles,
        inputFiles
    } = props;

    return (
        <React.Fragment>
            <div id="input-container">
                <div className="individual-input-wrappers" id="content-container">
                    <img className="user-img" id="content-img" src={img_place_holder} alt="user-img"/>
                    <div className="box">
                        <input type="file" name="file-5" id="file-5-content" className="inputfile inputfile-4" onChange={() => {
                                                                                                                                    showImageOnUpload("file-5-content", 
                                                                                                                                                    "content-img")
                                                                                                                                    changeInputFilesState("content-img", setInputFiles, inputFiles)
                                                                                                                                }} accept='image/*' data-multiple-caption="{count} files selected" multiple />
                        <label htmlFor="file-5-content"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> <span>Choose a file&hellip;</span></label>
                    </div>
                </div>
                <div className="individual-input-wrappers" id="style-container">
                    <img className="user-img" id="style-img" src={img_place_holder} alt="user-img"/>
                    <div className="box">
                        <input type="file" name="file-5" id="file-5-style" className="inputfile inputfile-4" onChange={() => { 
                                                                                                                                showImageOnUpload("file-5-style", 
                                                                                                                                                  "style-img")
                                                                                                                                changeInputFilesState("style-img", setInputFiles, inputFiles)
                                                                                                                            }} accept='image/*' data-multiple-caption="{count} files selected" multiple />
                        <label htmlFor="file-5-style"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> <span>Choose a file&hellip;</span></label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InputFields;