import axios from "axios";
 const instance = axios.create({
    baseURL:'https://booking-app-wvuz.onrender.com'
 });
 
 export default instance