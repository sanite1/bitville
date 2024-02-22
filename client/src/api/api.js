
import axios from "axios";



export default axios.create({
    baseURL: "https://bitvilletech-production.up.railway.app",
    // withCredentials: true,
    credentials:"include"    
})