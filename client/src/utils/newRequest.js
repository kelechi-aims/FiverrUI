import axios from 'axios';

const newRequest = axios.create({
    baseURL: 'https://fiverr-clone-61cv.onrender.com/api/',
    withCredentials: true,
})

export default newRequest;