import axios from "axios";


export const categoryApi = axios.create({
    baseURL :  `${location.origin}/api/categories`,
    headers : {
        "Content-Type" : "application/json"
    }
})