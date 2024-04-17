import axios from 'axios';
const API_URL="https://file-sharing-flame-eta.vercel.app"
axios.defaults.withCredentials=true;
export const uploadFile=async(data)=>{
    try {
        let response= await axios.post(`${API_URL}/upload`,data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(`error while calling the API ${error.message}`);
    }
}