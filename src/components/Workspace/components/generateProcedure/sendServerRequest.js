import React from 'react'
import InputFields from '../InputFields';
import axios from "axios"

const sendServerRequest = async (socket, socketConnected, inputFiles) =>
{
    console.log("HELLO")
    if(socketConnected)
    {
        var data = { init: true }
        data = JSON.stringify(data)
        await socket.current.send(data)

        let absentImage = false
        inputFiles.map(element => !element ? absentImage = true : absentImage)
        console.log(absentImage)

        if(!absentImage)
        {
            const formData = new FormData();
            formData.append("file", inputFiles[0])

            console.log(formData)
            axios.put("http://localhost:8000/api/", formData, {headers: {
                'Content-Type': 'multipart/form-data'
              }})
            .then(function (response) {
                // handle success
                console.log(response);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function() {
                  console.log("ZC")
              })
            /*axios.put("localhost:8000/api/",
                formData,
                {headers: {
                  "Content-Type": "multipart/form-data"
                }})*/
        }

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