import axios from 'axios';
const API_URL="https://file-sharing-flame-eta.vercel.app"
axios.defaults.withCredentials=true;
export const uploadFile=async(data)=>{
    try {
        let response= await axios.post(`${API_URL}/upload`,data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.log(`Server responded with status ${error.response.status}`);
            console.log(error.response.data);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(`No response received from server: ${error.request}`);
        } else {
            // Something else happened while setting up the request
            console.log(`Error setting up the request: ${error.message}`);
        }
    }
}