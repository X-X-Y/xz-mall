const express=require("express");
var router=express.Router();
var query=require("./query");

router.get("/",(req,res)=>{
  var output={
    count:0,
    pageSize:9,
    pageCount:0,
    pno:req.query.pno||0,
    data:[]
  };

  var kw=req.query.kw||"";
  var kws=kw.split(" ");

  kws.forEach((elem,i,arr)=>{
    arr[i]=`title like '%${elem}%'`;
  })
  
  var where=kws.join(" and ");
  var sql=`select *,(select md from xz_laptop_pic where laptop_id=lid limit 1) as md from xz_laptop where ${where}`;
  
  query(sql,[])
  .then(result=>{
    output.count=result.length;
    output.pageCount=
      Math.ceil(output.count/output.pageSize);
    sql+=` limit ?,?`;
    return query(sql,[output.pageSize*output.pno,output.pageSize]);
  })
  .then(result=>{
    output.data=result;
    res.send(output);
  })
})

router.get("/shelp",(req,res)=>{
  var kw=req.query.kw;
  var kws=kw.split(" ");
  kws.forEach((elem,i,arr)=>{
    arr[i]=`title like '%${elem}%'`;
  })
  var where=kws.join(" and ");
  var sql=`select lid,title from xz_laptop where ${where} limit 10`;
  query(sql,[]).then(result=>{
    res.send(result);
  })
})

module.exports=router;