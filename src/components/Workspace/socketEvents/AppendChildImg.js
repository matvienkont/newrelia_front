
const appendChildImg = (data) => {
    var container = document.getElementById("collage-container");
    var img = document.createElement("img")
    img.src = `data:image/jpeg;base64,${data}`
    img.className = 'collage-img-style'

    container.appendChild(img)
}

export default appendChildImg