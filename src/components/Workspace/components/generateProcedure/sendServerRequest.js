import axios from "axios"
import appendChildImg from "../../socketEvents/AppendChildImg"
import { isLoading } from "./loadingIndicator";

const sendServerRequest = async (socket, socketConnected, inputFiles, options) => {
    if (socketConnected) {
        console.log(options);
        
        const formattedOptions = {
            'style_imgs': 'style.jpg',
            'content_img': 'content.jpg',
            'style_imgs_weights': options.styleWeight,
            'tv_weight': options.TVWeight,
            'temporal_weight': options.TemporalWeight,
            'original_colors': options.checked,
            'pooling_type': options.pooling,
        }

        let data = { init: true }
        data = JSON.stringify(data)
        await socket.current.send(data)

        socket.current.onmessage = (e) => {

            const socketData = JSON.parse(e.data);
            
            formattedOptions.channelName = socketData.channel_name;
            
            console.log(socketData);
            if(socketData.img) {
                console.log('Image append came');
                console.log(socketData.img_src);
                appendChildImg(socketData.img_src);
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
                console.log(options);
                formData.append("data", JSON.stringify(formattedOptions))

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
                        isLoading(true);
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