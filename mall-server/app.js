var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const cors=require("cors");
const history = require('connect-history-api-fallback');

/*引入路由模块*/
var index=require("./routes/index");
var details=require("./routes/details");
var products=require("./routes/products");
var users=require("./routes/users");
var cartItems=require("./routes/cartItems");
var weather=require("./routes/weather");

var app = express();
app.use(cors({
  origin:['http://localhost:8080'],
  credentials:true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},
  resave:false,
  saveUninitialized:true
}));
//将服务器的session，放在req.session中
app.use(express.static(path.join(__dirname,"public")));

/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/details",details);
app.use("/products",products);
app.use("/users",users);
app.use("/cartItems",cartItems);
app.use("/weather",weather);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
