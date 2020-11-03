import axios from 'axios';

const KEY = "AIzaSyBFH5GI9d9pJTGXX5d4r6ppJIIchMPVMzM"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})