import { mongoose } from "mongoose";



const dbConnection = async ()=>{
    const MONGODB_URL=`mongodb+srv://user:File-sharing@file-sharing.boga5sw.mongodb.net/?retryWrites=true&w=majority&appName=File-sharing`;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Mongo DB Connected Successfully");
    } catch (error) {
        console.log('Error while connecting to database: ' + error.message);
    }
}

export default dbConnection;