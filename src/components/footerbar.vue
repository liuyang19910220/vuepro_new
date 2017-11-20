<template>
  <div data-am-widget="navbar" class="am-navbar  am-navbar-default gm-foot" id="">
    <ul class="am-navbar-nav am-cf am-avg-sm-4">
      <li>
        <router-link to="/home" active-class="curr">
          <span class="am-icon-home"></span>
          <span class="am-navbar-label">首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shoplist" active-class="curr">
          <span class="am-icon-th-large"></span>
          <span class="am-navbar-label">商品</span>
        </router-link>
      </li>
      <li>
        <router-link to="/member" active-class="curr">
          <span class="am-icon-user"></span>
          <span class="am-navbar-label">个人中心</span>
        </router-link>

      </li>
      <li>
        <router-link to="/shopcar" active-class="curr">
          <span class="am-icon-shopping-cart"></span>
          <span class="am-navbar-label">购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/talk" active-class="curr" >
          <span class="am-icon-file-text-o"></span>
          <span class="am-navbar-label">果友说</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods:{
      //配合router-link中的组件时间添加@click.native="conState"
     /* conState(){
        this.$store.dispatch('hideFoot')
      }*/
    }
  }
</script>