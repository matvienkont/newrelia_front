const showImageOnUpload = (inputId, imageId) => 
{
    const selectedFile = document.getElementById(inputId).files[0];
    var imageInput = document.getElementById(imageId);

    imageInput.src = URL.createObjectURL(selectedFile);
}

export default showImageOnUpload;