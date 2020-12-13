import React from 'react'

const sendServerRequest = async (socket, socketConnected) =>
{
    console.log("HELLO")
    if(socketConnected)
    {
        var data = { init: true };
        data = JSON.stringify(data);
        await socket.current.send(data);
    }

    socket.current.onmessage = (e) => 
    {
        appendChildImg(e.data);
    }
}

const appendChildImg = (data) => {
    var container = document.getElementById("collage-container");
    console.log(container);
    var img = document.createElement("img")
    img.src = `data:image/jpeg;base64,${data}`
    img.className = 'img-style'

    console.log(img);
    container.appendChild(img)

    //img.src = `data:image/jpeg;base64,${data}`;
}

export default sendServerRequest;