const express=require("express");const path=require("path");const app=express();app.use(express.static(path.join(__dirname,"public")));app.get("/api/questions",(req,res)=>res.json([
{q:"Which language runs natively in a browser?",a:["Python","JavaScript","C","SQL"],correct:1},
{q:"What does HTTP stand for?",a:["HyperText Transfer Protocol","High Transfer Text Process","Host Tool Transfer Protocol","Hyperlink Transfer Program"],correct:0},
{q:"Which data structure uses FIFO?",a:["Stack","Queue","Tree","Graph"],correct:1},
{q:"Which SQL command reads records?",a:["INSERT","UPDATE","SELECT","DROP"],correct:2},
{q:"Which status code usually means Not Found?",a:["200","301","403","404"],correct:3}
]));const port=process.env.PORT||3000;app.listen(port,()=>console.log(`Quiz running at http://localhost:${port}`));