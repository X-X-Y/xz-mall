<template>
  <div class="container my_header">
    <div class="row no-gutters">
      <div class="col-sm-12 col-lg-3 text-sm-center">
        <a href="/" class="navbar-brand">
          <img src="img/header/logo.png" />
        </a>
      </div>
      <div class="col-sm-12 col-lg-5">
        <div class="input-group mt-2">
          <input
            class="form-control text-small"
            placeholder="请输入查询内容"
            type="text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <a href="#">
            <img src="img/header/search.png" />
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <ul class="breadcrumb bg-transparent justify-content-lg-end">
          <li class="breadcrumb-item">
            <a href="#">
              <img src="img/header/care.png" alt="" />
            </a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">
              <img src="img/header/order.png" alt="" />
            </a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">
              <img src="img/header/shop_car.png" alt="" />
            </a>
          </li>
          <li class="breadcrumb-item">
            <a class="text-muted" href="#"> 注册 </a>
          </li>
          <li class="breadcrumb-item">
            <a class="text-muted" href="#"> 登录 </a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <a href="#" class="nav-link text-muted">首页</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-muted">学习用品</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-muted">私人订制</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.form-control{
	border-radius: 0;
  height: 34px;
	border-color: #0aa1ed;
	outline: 0;
}
.form-control:focus{
	box-shadow: none;
}
.breadcrumb-item+.breadcrumb-item::before{
	content: "|";
}
</style>