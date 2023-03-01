import axios from "axios";
const instanse= axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_URL,
    headers:{
        "Content-Type" : "application/json"
    }
})

export {instanse};