<template>
  <div data-am-widget="slider" class="am-slider am-slider-b2" data-am-slider='{"controlNav":true}'>
    <ul class="am-slides">
      <li v-for="(item,index) in m.img" :key="index">
        <img :src="item">
      </li>
    </ul>
  </div>

</template>
<script>

  export default {
    data() {
      return {
//        slider: []
      }
    },

    props:['m','mhome'],

    //生命周期挂载后->模板加载完毕后VUE接管
    updated() {
      //更新后，处理业务逻辑，如轮播配置
      $('.am-slider').flexslider();
//      console.log(m);
    },

  }
</script>
<style></style>