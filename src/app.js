const express=require("express");

const app=express();

app.use((req,res)=>res.send("hello from the serverx"));

app.listen(3000,()=>console.log("mahika"));