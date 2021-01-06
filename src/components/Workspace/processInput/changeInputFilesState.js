const changeInputFilesState = (inputType, setInputState, inputFiles) =>
{
    var input;
    var newInputFiles;

    if (inputType === "content-img")
    {
        input = document.getElementById("file-5-content")
        newInputFiles = inputFiles
        newInputFiles[0] = input.files[0]
        setInputState(newInputFiles)
    }
    else if (inputType === "style-img")
    {
        input = document.getElementById("file-5-style")
        newInputFiles = inputFiles
        newInputFiles[1] = input.files[0]
        setInputState(newInputFiles)
    }
}

export default changeInputFilesState