<template>
  <div class="shopcar">
    <header data-am-widget="header" class="am-header am-header-default joan-head2 ">
      <div class="am-header-left am-header-nav">
        <a href="javascript:history.back()" class="">
          <i class="am-icon-chevron-left"></i>
        </a>
      </div>
      <h1 class="am-header-title">
        <a href="" class="">购物车</a>
      </h1>
      <div class="am-header-right am-header-nav">
        <a href="" class="">
          <i class="am-header-icon am-icon-del"></i>
        </a>
      </div>
    </header>
    <div class="shopcartit">已购商品</div>
    <div class="c-comment-list" style="border: 0;">
      <!--购物车项目从状态管理中取出,在此循环-->
      <div class="o-con2" v-for="(item,index) in buycar" :key="index">
        <div class="o-con-img"><img :src="item.img[0]"/></div>
        <div class="o-con-txt2">
          <p>{{item.title}}</p>
          <p style="color: #afafaf;">{{item.num}}</p>
          <div class="con">
            <div class="price">{{item.price}}</div>
            <div class="p-pur">
              <a class="decrease">-</a>
              <em class="sy_num">{{count}}</em>
              <a class="increase">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shaopprice">
      <em>￥ <span>970</span></em>
      <router-link to="/myorder">立即结算</router-link>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';

  export default {
    data() {
      return {
        perPrice:'',
        num:''
      }
    },
    methods: {
      ...mapActions([
        'increment', 'decrement'
      ]),
      showAll(){

      }
    },
    computed: mapGetters([
      'buycar', 'count'
    ])
  }

</script>

<style>
  body {
    background: #fff;
  }
</style>