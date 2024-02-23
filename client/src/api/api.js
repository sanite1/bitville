
import axios from "axios";



export default axios.create({
    baseURL: "https://bitville.onrender.com",
    // withCredentials: true,
    credentials:"include"    
})