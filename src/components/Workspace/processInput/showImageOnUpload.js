const showImageOnUpload = (inputId, imageId) => 
{
    const selectedFile = document.getElementById(inputId).files[0];
    const imageInput = document.getElementById(imageId);

    imageInput.src = URL.createObjectURL(selectedFile);
}

export default showImageOnUpload;