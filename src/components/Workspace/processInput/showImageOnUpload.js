const showImageOnUpload = (input) => 
{
    const selectedFile = document.getElementById("fileInput").files[0];
    console.log(selectedFile);
    const imageInput = document.getElementById("imageInput");
    console.log(imageInput);

    imageInput.src = URL.createObjectURL(selectedFile);
}

export default showImageOnUpload;