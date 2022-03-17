<template>
  <div>
    <my-header></my-header>
    
    <div class="container">
      
      <div id="demo" class="carousel" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-100" src="img/index/banner1.png" alt="" />
          </div>
          <div class="carousel-item">
            <img class="w-100" src="img/index/banner2.png" alt="" />
          </div>
          <div class="carousel-item">
            <img class="w-100" src="img/index/banner3.png" alt="" />
          </div>
          <div class="carousel-item">
            <img class="w-100" src="img/index/banner4.png" alt="" />
          </div>
        </div>
        
        <ul class="carousel-indicators">
          <li class="active" data-slide-to="0" data-target="#demo"></li>
          <li data-slide-to="1" data-target="#demo"></li>
          <li data-slide-to="2" data-target="#demo"></li>
          <li data-slide-to="3" data-target="#demo"></li>
        </ul>
        
        <a href="#demo" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <a href="#demo" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
      </div>
      
      <div class="border-bottom py-2 mb-2">
        <img src="img/index/computer_icon.png" alt="" />
        <span class="h5 font-weight-bold ml-3 text-muted">首页推荐 / 1F</span>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-7 col-sm-12">
          <div class="top_height mr-lg-1 mr-sm-0 mb-1">
            <div class="card w-55 pt-5 pl-5 border-0 bg-transparent">
              <h2 class="m-0" v-text="p1.title"></h2>
              <div
                class="text-small text-muted mb-4"
                href="javascript:;"
                v-text="p1.details"
              ></div>
              <p
                class="text-primary h3 font-weight-normal mb-4"
                v-text="`¥${p1.price.toFixed(2)}`"
              ></p>
              <router-link
                class="btn btn-primary btn1"
                :to="`/details/${p1.href.split('=')[1]}`"
                >查看详情</router-link
              >
            </div>
            <img
              class="float-right img_position_1"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              :src="p1.pic"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div class="col-lg-5 col-sm-12">
          <div class="top_height mb-1">
            <div class="card border-0 bg-transparent w-50 pt-5 pl-4">
              <h2 class="m-0" v-text="p2.title"></h2>
              <div
                class="text-small text-muted mb-4"
                href="javascript:;"
                v-text="p2.details"
              ></div>
              <p
                class="text-primary h3 font-weight-normal mb-4"
                v-text="`¥${p2.price.toFixed(2)}`"
              ></p>
              <router-link
                class="btn btn-primary btn2"
                :to="`/details/${p2.href.split('=')[1]}`"
                >查看详情</router-link
              >
            </div>
            <img
              class="float-right img_position_2"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              :src="p2.pic"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div class="col-lg-5 col-sm-12">
          <div class="bottom_height mb-1 mr-lg-1 mr-sm-0 mb-sm-1">
            <div class="card border-0 w-50 pt-5 pl-4 bg-transparent">
              <h4 class="mb-1" v-text="p3.title"></h4>
              <p
                class="mb-3 h4 text-primary"
                v-text="`¥${p3.price.toFixed(2)}`"
              ></p>
              <router-link
                class="btn btn-primary w-75"
                :to="`/details/${p3.href.split('=')[1]}`"
                >查看详情</router-link
              >
            </div>
            <img
              class="float-right img_position_4"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              :src="p3.pic"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div class="col-lg-7 col-sm-12">
          <div class="row no-gutters">
            <div class="col bm-part" v-for="(p, i) of others" :key="i">
              <div class="bottom_height">
                <div class="d-flex flex-column align-items-center">
                  <img
                    class="img_position_3"
                    :src="p.pic"
                    alt="Card image cap"
                  />
                  <p class="text-muted text-small mb-1" v-text="p.title"></p>
                  <p
                    class="h6 text-primary mb-1"
                    v-text="`¥${p.price.toFixed(2)}`"
                  ></p>
                  <router-link
                    class="btn btn-primary"
                    :to="`/details/${p.href.split('=')[1]}`"
                    >查看详情</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1: { price: 0, href: "" },
      p2: { price: 0, href: "" },
      p3: { price: 0, href: "" },
      others: []
    };
  },
  mounted() {
    this.axios.get("index").then((result) => {
      [this.p1, this.p2, this.p3] = result.data;
      this.others = result.data.slice(3);
    });
  }
};
</script>

<style scoped>
.carousel-indicators li {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
.carousel-indicators li.active {
  background-color: #0aa1ed;
}
.carousel-control-prev,
.carousel-control-next {
  width: 4%;
  height: 20%;
  top: 40%;
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.3);
}
.carousel-control-prev {
  left: 0.2rem;
}
.carousel-control-next {
  right: 0.2rem;
}
.border-bottom {
  border-width: 0.2rem !important;
}
.top_height {
  height: 377px;
  background-color: #e8e8e8;
}
.bottom_height {
  height: 233px;
  background-color: #e8e8e8;
}
.bm-part + .bm-part {
  margin-left: 4px;
}
.img_position_1,
.img_position_2 {
  margin-right: 25px;
  transition: 1s;
}
.img_position_1:hover,
.img_position_2:hover,
.img_position_3:hover,
.img_position_4:hover {
  transform: scale(1.1);
}
.img_position_1 {
  margin-top: -260px;
}
.img_position_2 {
  margin-top: -190px;
}
.img_position_3 {
  width: 95%;
  transition: 1s;
}
.img_position_4 {
  margin-top: -140px;
  margin-right: 5px;
  transition: 1s;
}
.w-55 {
  width: 55%;
}
.btn1,
.btn2 {
  width: 50%;
}
@media (max-width: 600px) {
  .img_position_1 {
    width: 80%;
  }
  .btn1,
  .btn2 {
    width: 70%;
  }
}
</style>