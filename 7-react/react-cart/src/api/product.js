import axios from "axios";


export const productApi = axios.create({
    baseURL :  `${location.origin}/api/products`,
    headers : {
        "Content-Type" : "application/json"
    }
})