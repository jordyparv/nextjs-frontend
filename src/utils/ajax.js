import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:1337";

const ajax =  axios.create({
    baseURL: API_BASE_URL
});
export default ajax;