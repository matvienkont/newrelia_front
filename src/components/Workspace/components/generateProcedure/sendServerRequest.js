import axios from "axios"
import appendChildImg from "../../socketEvents/AppendChildImg"


const sendServerRequest = async (socket, socketConnected, inputFiles, options) => {
    if (socketConnected) {
        
        let data = { init: true }
        data = JSON.stringify(data)
        await socket.current.send(data)

        socket.current.onmessage = (e) => {
            

            const socketData = JSON.parse(e.data);
            options.channelName = socketData.channel_name;
            
            console.log(socketData);
            if(socketData.img) {
                console.log('Image append came');
                return undefined;
            }

            if (socketData.data) {
                appendChildImg(socketData.data);
            }

            let absentImage = false
            inputFiles.map(element => !element ? absentImage = true : absentImage)

            if (!absentImage) {
                const formData = new FormData();
                inputFiles.map(element => formData.append("file", element))
                formData.append("data", JSON.stringify(options))

                console.log(formData)
                axios.put("http://localhost:8000/api/", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(async (response) => {
                        let data = { init: false }
                        data = JSON.stringify(data)
                        await socket.current.send(data)
                        console.log(response);
                    })
                    .catch((error) => {
                        // handle error
                        console.log(error);
                    })
                    .then(async () => {
                        
                    })
            }
        }
    }



}

export default sendServerRequest;