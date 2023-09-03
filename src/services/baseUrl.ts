import axios from "axios";

const postUrl = axios.create({
    baseURL: "http://localhost:8000/api/post"
})

export default postUrl