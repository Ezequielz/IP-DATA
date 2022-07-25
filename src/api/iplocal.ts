import axios from "axios";

const ipLocal = axios.create({
    baseURL: 'https://ipinfo.io/json'
})

export default ipLocal;