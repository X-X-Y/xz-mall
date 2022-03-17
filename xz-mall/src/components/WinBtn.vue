<template>
  <div class="btn-group-vertical" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">首页<br>推荐</button>
    <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">最新<br>上架</button>
    <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">热销<br>单品</button>
  </div>
</template>

<style>
.btn-group-vertical{
  position: fixed;
  top:100px;
  left:10px;
  z-index: 2;
}
.btn-group-vertical>.btn-secondary:hover {
  background-color: #e4393c;
  border-color: #e4393c;
}
</style>