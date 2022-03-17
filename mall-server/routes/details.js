const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var output={};
  var sql="SELECT * FROM `xz_laptop` where lid=?";
  query(sql,[lid])
  .then(result=>{
    output.product=result[0];
    var fid=output.product.family_id;
    var sql="SELECT spec,lid FROM `xz_laptop` where family_id=?";
    return query(sql,[fid])//return Promise
  })
  .then(result=>{
    output.specs=result;
    var sql="SELECT * FROM `xz_laptop_pic` where laptop_id=?";
    return query(sql,[lid])
  })
  .then(result=>{
    output.pics=result;
    setTimeout(()=>{
      res.send(output);
    },200)
  })
  .catch(error=>console.log(error))
})
module.exports=router;
//http://localhost:3000/details?lid=3