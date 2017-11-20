<template>
  <div class="member">
    <!--<router-view></router-view>-->
    <div class="user-head">
      <div class="user-head-con">
        <a href="">
          <div class="user-head-img">
            <img src="../assets/images/default.png">
            <i class="am-icon-chevron-right"></i>
            <a @click="logout" href="javascript:;">{{out}}</a>
            <div class="user-dengji"><img src="../assets/images/v0.png"/></div>
          </div>
        </a>

      </div>
      <div class="user-contact">{{user}}</div>
      <ul class="user-list">
        <li>
          <a href="">
            <p>积分</p><em>0</em></a>
        </li>
        <li>
          <a href="">
            <p>余额</p><em>￥0.00</em></a>
        </li>
        <li>
          <a href="">
            <p>优惠劵</p><em>0</em></a>
        </li>
      </ul>
    </div>
    <div class="user-quick">
      <ul>
        <li>
          <div class="am-gallery-item">
            <router-link to="/myorder" class="user-quick-p">
              <img src="../assets/images/u-icon1.png">
              <p>我的订单</p>
            </router-link>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="" class="user-quick-p">
              <img src="../assets/images/u-icon2.png">
              <p>待评价</p>
            </a>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="" class="user-quick-p">
              <img src="../assets/images/u-icon3.png">
              <p>会员等级</p>
            </a>
          </div>
        </li>

        <li>
          <div class="am-gallery-item">
            <router-link to="/mine" class="user-quick-p">
              <img src="../assets/images/u-icon4.png">
              <p>我的赠品</p>
            </router-link>
          </div>
        </li>

        <li>

          <div class="am-gallery-item">
            <a href="" class="user-quick-p">
              <img src="../assets/images/u-icon5.png">
              <p>我的特权</p>
            </a>
          </div>
        </li>
        <li>
          <div class="am-gallery-item">
            <a href="" class="user-quick-p">
              <img src="../assets/images/u-icon6.png">
              <p>我的试吃</p>
            </a>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        user: '',
        out: '注销'
      }
    },

    methods: {
      logout() {
        console.log('logout')
        this.$http({
          url: "http://localhost:3000/logout",
          method: "get",
        }).then((res) => {
          console.log('logout-http_success：', res);
          this.out = '登录';
//          if(this.out=='')//在此判断路由跳转
          this.$router.push({'path': '/home'});
        }).catch((res) => {
          console.log('logout--http_err', res)
        })
      }
    },

    //加载时请求后端取出session
    mounted() {
      this.$http({
        url: "http://localhost:3000/users",
        method: "get",
//        data: {'username': this.user, 'password': this.psd}
      }).then((res) => {
//        console.log('users-http_success：', res);
        if (res.data.error == 0) {//判断接口
//          console.log('users-http-ok', res.data);
          this.user = res.data.msg[0].username;
        } else if (res.data.error == 1) {//判断接口
//          alert("usersxxxxxxxx");
        }
      }).catch((res) => {
//        console.log('users--http_err', res)
      })
    },
  }
</script>

<style>

</style>