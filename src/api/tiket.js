import axios from 'axios';

export default axios.create({
    baseURL:"https://tiket-generator.herokuapp.com/",
    headers:{
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})