import axios from "axios"
import appendChildImg from "../../socketEvents/AppendChildImg"


const sendServerRequest = async (socket, socketConnected, inputFiles, options) =>
{
    if(socketConnected)
    {

        var data = { init: true }
        data = JSON.stringify(data)
        await socket.current.send(data)

        socket.current.onmessage = (e) => 
        {
            const socketData = JSON.parse(e.data);
            options.channelName = socketData.channel_name;
            appendChildImg(socketData.data);

            let absentImage = false
        inputFiles.map(element => !element ? absentImage = true : absentImage)

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
        }


        
}

export default sendServerRequest;