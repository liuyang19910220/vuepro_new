<template>
  <div class="home">
    <header data-am-widget="header" class="am-header am-header-default joan-head">
      <div class="gm-head-left">
        <a href="#left-link" class=""><i class="am-icon-map-marker"></i>南昌</a>
      </div>
      <div class="gm-head-search">
        <a href="javascript:;"><input type="text" placeholder="寻找你喜欢的商品"><i class="am-icon-search"></i>
        </a>
      </div>

      <div class="gm-head-right">
        <router-link to="/login">登陆</router-link>
        /
        <router-link to="/reg">注册</router-link>
      </div>
    </header>

    <!--banner-->
    <!--<slider></slider>由于图片取值路径不同，主页轮播只能单独写-->
    <!-- <div data-am-widget="slider" class="am-slider am-slider-b2" data-am-slider='{"controlNav":true}'>
       <ul class="am-slides">
         <li v-for="(item,index) in slider" :key="index">
           <img :src="item.img">
         </li>
       </ul>
     </div>-->
    <swipe class="my-swipe">
      <swipe-item v-for="(item,index) in slider" :key="index"><img :src="item.img"></swipe-item>

    </swipe>

    <div class="case-nav">
      <ul>
        <li>
          <div class="am-gallery-item">
            <router-link to="/shoplist" active-class="case-nav-p">
              <img src="../assets/images/icon1.png">
              <p>全部商品</p>
            </router-link>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <router-link to="/shoplist" active-class="case-nav-p">
              <img src="../assets/images/icon2.png">
              <p>鲜果区</p>
            </router-link>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="#" class="case-nav-p">
              <img src="../assets/images/icon3.png">
              <p>礼品区</p>
            </a>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <router-link to="/brand" active-class="case-nav-p">
              <img src="../assets/images/icon4.png">
              <p>品牌故事</p>
            </router-link>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <router-link to="/brand" active-class="case-nav-p">
              <img src="../assets/images/icon1.png">
              <p>品质溯源</p>
            </router-link>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="#" class="case-nav-p">
              <img src="../assets/images/icon2.png">
              <p>企业采购</p>
            </a>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="#" class="case-nav-p">
              <img src="../assets/images/icon3.png">
              <p>物流售后</p>
            </a>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="#" class="case-nav-p">
              <img src="../assets/images/icon4.png">
              <p>免费试吃</p>
            </a>
          </div>
        </li>

      </ul>
    </div>

    <div class="active-main">
      <ul>
        <li>
          <router-link to="/detail"><img src="../assets/images/act1.jpg"></router-link>
        </li>
        <li>
          <router-link to="/detail"><img src="../assets/images/act2.jpg"></router-link>
        </li>
        <li>
          <router-link to="/detail"><img src="../assets/images/act3.jpg"></router-link>
        </li>
      </ul>

    </div>

    <div class="product">
      <ul class="am-gallery am-avg-sm-2 am-avg-md-2 am-avg-lg-4 am-gallery-default">
        <h2><span></span>鲜果专区</h2>
        <!--v-for-->
        <li v-for="(item,index) in arr" :key="index">
          <div class="am-gallery-item">
            <!--向路由传递params=item.id-->
            <router-link :to="'/detail/'+item.id">
              <img :src="item.img[0]"/>
              <div class="am-gallery-desc">
                <div class="pro-tit">
                  <h3>{{item.title}}</h3>
                  <p>{{item.num}}</p>
                </div>

                <div class="pro-price">
                  {{item.price}}
                  <del>{{item.delprice}}</del>
                </div>

              </div>
            </router-link>
          </div>
        </li>
      </ul>

      <ul class="am-gallery am-avg-sm-2 am-avg-md-2 am-avg-lg-4 am-gallery-default">
        <h2><span></span>礼盒专区</h2>
        <!--v-for-->
        <li>
          <div class="am-gallery-item">
            <router-link to="/detail" class="">
              <img src="../assets/images/g1.jpg"/>
              <div class="am-gallery-desc">
                <div class="pro-tit">
                  <h3>南丰蜜桔 南丰贡桔</h3>
                  <p>12个装</p>
                </div>

                <div class="pro-price">
                  ￥88
                  <del>￥108</del>
                </div>

              </div>
            </router-link>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.component('swipe', Swipe);
  Vue.component('swipe-item', SwipeItem);
  require('vue-swipe/dist/vue-swipe.css');
  import {Swipe, SwipeItem} from 'vue-swipe';

  export default {
    data() {
      return {
        arr: [],
        slider: []
      }
    },

    created() {
      //组件向actions申请，修改状态，显示loading
//      this.$store.dispatch('showLoading');
      this.$http({
        //请求端口，指向node路由接口
        url: 'http://localhost:3000/index',
      }).then((res) => {
        this.arr = res.data;
        //组件向actions申请，修改状态，隐藏loading
//        this.$store.dispatch('hideLoading');
//        console.log('res',res)
      }).catch((res) => {
        console.log(res);
      });

//轮播图片资源放到slider中
      this.$http({
        url: '/data/slider.json',
      }).then((res) => {
        this.slider = res.data;
      }).catch((res) => {
        console.log(res);
      })

    },

    //生命周期挂载后->模板加载完毕后VUE接管
    updated() {
    },

    components: {
    }

  }
</script>

<style>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .my-swipe img {
    width:100%;
  }
</style>


