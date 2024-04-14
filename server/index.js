import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import dbConnection from "./database/db.js";
const app=express();
app.use(cors());
app.use('/',router);

const port=8000;

dbConnection();
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})