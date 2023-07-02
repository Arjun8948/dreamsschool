import express from "express";
 

const app = express();
 
 app.use("/",()=>{
 console.log("working")
 })

app.listen();
 
 