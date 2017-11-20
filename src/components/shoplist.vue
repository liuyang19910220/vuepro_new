
<template>
  <div class="shoplist">
    <!--<body  class="gudin am-with-fixed-navbar">-->
    <header data-am-widget="header" class="am-header am-header-default joan-head"
            style="z-index:999;position: fixed; top: 0; left: 0;border: 1px solid #ddd;">
      <div class="gm-head-left">
        <a href="#left-link" class=""><i class="am-icon-map-marker"></i>南昌</a>
      </div>
      <div class="gm-head-search">
        <a href="search.html">
          <input type="text" placeholder="寻找你喜欢的商品"><i class="am-icon-search"></i></a>
      </div>

      <div class="gm-head-right">
        <router-link to="/login">登陆</router-link> /<router-link to="/reg">注册</router-link>
      </div>
    </header>

    <div class="list-content">
      <div class="list-left">
        <li class="list-curr"><a href="">全部商品</a></li>
        <li><a href="">鲜果区</a></li>
        <li><a href="">礼盒专区</a></li>
      </div>
      <div class="list-right">
        <ul class="list-menu">
          <li><a href="">默认排序 </a></li>
          <li><a href="">口碑值</a><i class="list-menu-arrow"></i></li>
          <li><a href="">价格</a><i class="list-menu-arrow"></i></li>
          <li><a href="">新品</a><i class="list-menu-arrow"></i></li>
          <li><a href="">收藏</a><i class="list-menu-arrow"></i></li>
        </ul>
        <ul>
          <!--v-for-->
          <li class="zm" v-for="(item,index) in arr" :key="index">
            <div class="zm-l">
              <div class="pro-img"><img :src="item.img[0]"/></div>
              <div class="pro-con">
                <h2 class="pro-deta" data-id="{$val.id}">{{item.title}} </h2>
                <p class="pro-num" data-id="{$val.id}"> {{item.num}}</p>
                <p><span>{{item.price}}</span>
                  <del>{{item.delprice}}</del>
                </p>
              </div>

            </div>
            <div class="zm-r">
              <a class="zm-r-j">-</a>
              <a class="zm-r-num">0</a>
              <a class="zm-r-j">+</a>
            </div>
          </li>

          <li style="height: 20px;"></li>
        </ul>
      </div>
    </div>
    <!--</body>-->
  </div>
</template>


<script>

  export default {
    //生命周期挂载后->模板加载完毕后VUE接管
    mounted() {

    },

    data() {
      return {
        arr: [],
      }
    },

    created() {
      this.$http({
        url: '/data/index.json',
      }).then((res) => {
        this.arr = res.data;
//        console.log(res.data)
      }).catch((res) => {
        console.log(res);
      });
    },


  }
</script>

<style scoped>
  .list-curr {
    background: #fff;
    display: block;
    border-right: 0;
  }

  .gm-head-right {
    color: #2b2a2a;
  }

  .gm-head-right a {
    color: #2b2a2a;
  }

  .joan-head {
    background: #fff;
  }

  .gm-head-search input {
    border: 1px solid #599a3c;
  }

  .gm-head-left a, .gm-head-right a {
    color: #599a3c;
  }
</style>
