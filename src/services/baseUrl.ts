import axios from "axios";

const postUrl = axios.create({
    baseURL: "http://localhost:8000/api/post"
})

const authUrl = axios.create({
    baseURL: "http://localhost:8000/api/auth"
})
export {authUrl, postUrl}