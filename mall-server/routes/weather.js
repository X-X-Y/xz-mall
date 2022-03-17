const express=require("express");
var router=express.Router();
const http=require("http");

router.get("/",(req,res)=>{
  http.get("http://localhost:3000",(res2)=>{
    var weather="";

    res2.on("data",(data)=>{
      weather=data;
      res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
      });
      res.write(weather);
      res.end();
    })
  })
})

module.exports=router;