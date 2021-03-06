var express=require("express");
var router=express.Router();
var pool=require("../pool");
var query=require("./query");

//cartItems 获得当前用户的购物车项，按编号降序排列
router.get("/",(req,res)=>{
  var sql=
  `select *,(
    select md from xz_laptop_pic 
    where laptop_id=lid 
    limit 1
   ) as md 
   from xz_shoppingcart_item 
     inner join xz_laptop on product_id=lid 
   where user_id=? 
   order by iid desc`;
  var uid=req.session.uid;
  pool.query(sql,[uid],(err,result)=>{
    res.send(result);
  })
})
// http://localhost:3000/cartItems

router.get("/add",(req,res)=>{
  var {lid,count}=req.query;
  var uid=req.session.uid;
  var sql="select * from xz_shoppingcart_item where user_id=? and product_id=?";
  query(sql,[uid,lid])
  .then(result=>{
    if(result.length==0){
      var sql="insert into xz_shoppingcart_item values(null,?,?,?,0)";
      pool.query(sql,[uid,lid,count],(err,result)=>{
        res.send();
      })
    }else{
      var sql="update xz_shoppingcart_item set count=count+? where user_id=? and product_id=?";
      pool.query(sql,[count,uid,lid],(err,result)=>{
        res.send();
      })
    }
  })
})
// http://localhost:3000/cartItems/add?lid=X&count=X

router.get("/update",(req,res)=>{
  var {iid,count}=req.query;
  if(count>0){
    var sql="update xz_shoppingcart_item set count=? where iid=?";
    pool.query(sql,[count,iid],(err,result)=>{
      res.send();
    })
  }else{
    var sql="delete from xz_shoppingcart_item where iid=?";
    pool.query(sql,[iid],(err,result)=>{
      res.send();
    })
  }
})
//http://localhost:3000/cartItems/update?iid=X&count=X

module.exports=router;