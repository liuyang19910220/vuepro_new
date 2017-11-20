<template>
  <div class="detail">
    <div class="am-slider am-slider-default" data-am-flexslider id="demo-slider-0"
         style="border-bottom: 1px solid #b6b6b6;">
      <!--在此将父数据detail传递给子-->
      <slider :m="detail"></slider>

      <div class="am-header-left am-header-nav return">

        <a href="javascript:history.back()" class="return-fir">
          <i class="am-icon-chevron-left"></i>
        </a>
        <a href="javascript:;" class="share" @click="showshare"></a>
        <a href="" class="xin"></a>
      </div>
      <transition enterActiveClass="animated fadeIn" leaveActiveClass="animated fadeOut">
        <div class="share-con" v-show="bl" dispaly="block">
          <a href="" class="friend"></a>
          <a href="" class="zone"></a>
          <a href="" class="weixin"></a>
          <a href="" class="qq"></a>
          <a href="" class="sina"></a>
        </div>
      </transition>

    </div>
    <!--home数据保持一致-->
    <div class="content">
      <div class="title">{{detail.title}}</div>
      <div class="con">
        <div class="price"><span>{{detail.price}}</span></div>
        <div class="p-pur">
          <a @click="decrement" class="decrease">-</a>
          <em class="sy_num"><input v-model="count" style="width:30px; border: 0; text-align: center">
          </em>
          <a @click="increment" class="increase">+</a>
        </div>
      </div>
    </div>
    <div class="con-num">
      <span class="con-num-l">规格</span>
      <span class="con-num-r">{{detail.num}}</span>
    </div>
    <a class="con-num" href="javascript:;">
      <span class="con-num-l">商品评价</span>
      <i class="am-icon-angle-right" style=" float:right; color: #b4b4b4;"></i>
      <span class="con-num-m">
		<p style="color: #b4b4b4;">97%的果友给了</p>
		<p style=" margin-top: 1px;">
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
		</p>
	</span>
    </a>
    <div class="con-relative">
      <div class="title">购买该产品的果友也买了</div>
      <ul class="am-gallery am-avg-sm-3 am-avg-md-3 am-avg-lg-3 am-gallery-default ">

        <!--v-for历史记录-->
        <li>
          <a href="">
            <img src="../assets/images/p1.jpg">
            <div class="am-gallery-desc">
              <p class="tit">南丰贡桔<span>12个装</span></p>
              <p class="yanse">￥<span>88</span></p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="con-moretit"><img src="../assets/images/tit.png"></div>
    <div class="con-pic"><img src="../assets/images/test.jpg"></div>
    <div class="con-pic"><img src="../assets/images/test2.jpg"></div>
    <!--shopcart-->
    <div class="shop-cart">
      <span>
        <router-link tag="i" to="/shopcar" class="am-icon-shopping-cart am-icon-sm"></router-link>
        <p class="nums">1</p>
      </span>
      <a @click="addCart">加入购物车</a>
    </div>

  </div>
</template>


<script>
  import slider from './slider.vue'
  import {mapActions, mapGetters} from 'vuex';

  export default {
    data() {
      return {
        detail: [],
        num: '1',
        bl: false
      }
    },
    methods: {
      showshare() {
        this.bl = !this.bl;
      },
      addCart() {
        //状态管理将点击商品的ID（this.detail.id）传到状态管理store头上-》携带负载
        this.$store.dispatch('readSql', this.detail.id);
      },
      ...mapActions([
        'increment', 'decrement'
      ]),

    },
    computed:mapGetters([
      'count', 'buycar'
    ]),

    //生命周期挂载后->模板加载完毕后VUE接管
    mounted() {
      $('.am-slider').flexslider();

    },

    created() {
      this.$http({
        url: 'http://localhost:3000/index',
      }).then((res) => {
//        console.log(res);
//        console.log(res.data[this.$route.params.id], this.$route.params)//no1,1
//this.$route.params.id-->home中路由传递过来的item.id={id:1}
        this.detail = res.data[this.$route.params.id];
//        console.log(this.detail.id);
      }).catch((res) => {
        console.log(res);
      })
    },

    components: {
      slider
    }

  }
</script>

<style scoped>

  body {
    background: #fff;
  }
</style>
