import axios from "axios";

const api = axios.create({
    baseURL: "http:/192.168.15.17:8081"
})

export default api