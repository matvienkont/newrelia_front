import axios from "axios"
import appendChildImg from "../../socketEvents/AppendChildImg"


const sendServerRequest = async (socket, socketConnected, inputFiles, options) =>
{
    console.log("HELLO")
    if(socketConnected)
    {
        var data = { init: true }
        data = JSON.stringify(data)
        await socket.current.send(data)

        let absentImage = false
        inputFiles.map(element => !element ? absentImage = true : absentImage)

        console.log(inputFiles);

        if(!absentImage)
        {
            const formData = new FormData();
            inputFiles.map(element => formData.append("file", element))
            formData.append("data", JSON.stringify(options))

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
        }

    }

    socket.current.onmessage = (e) => 
    {
        appendChildImg(e.data);
    }
}

export default sendServerRequest;