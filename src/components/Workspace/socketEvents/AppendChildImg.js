
const appendChildImg = (data) => {
    var container = document.getElementById("collage-container");
    var linkContainer = document.createElement('a');
    const outputImage = document.getElementById("output-image");
    container.appendChild(linkContainer);

    var img = document.createElement("img")
    img.src = `data:image/jpeg;base64,${data}`
    img.className = "collage-img"
    outputImage.src = `data:image/jpeg;base64,${data}`;
    //`data:image/jpeg;base64,${data}`
    img.className = 'collage-img-style';
    linkContainer.target='_blank';
    linkContainer.href = img.src;

    linkContainer.appendChild(img);
}

export default appendChildImg