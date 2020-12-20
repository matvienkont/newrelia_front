const changeInputFilesState = (inputType, setInputState, inputFiles) =>
{
    if (inputType === "content-img")
    {
        var input = document.getElementById("file-5-content")
        var newInputFiles = inputFiles
        newInputFiles[0] = input.files[0]
        setInputState(newInputFiles)
    }
    else if (inputType === "style-img")
    {
        var input = document.getElementById("file-5-style")
        var newInputFiles = inputFiles
        newInputFiles[1] = input.files[0]
        setInputState(newInputFiles)
    }
}

export default changeInputFilesState