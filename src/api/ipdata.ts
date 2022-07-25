import axios from "axios";

const ipData = axios.create({
    baseURL: 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/'
})

export default ipData;