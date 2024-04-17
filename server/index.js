import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import dbConnection from "./database/db.js";
const app=express();
app.use(cors(
    {origin:['https://filesharing-five.vercel.app'],
    methods:['GET','POST'],
    credentials:true
}
));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://filesharing-five.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use('/',router);

const port=8000;

dbConnection();
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
