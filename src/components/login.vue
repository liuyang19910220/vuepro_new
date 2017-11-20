<template>
  <!--之前在顶层div上写了class=login，app.css样式表中已有该class相冲突-->
  <div>
    <header data-am-widget="header" class="am-header am-header-default joan-head2 ">
      <div class="am-header-left am-header-nav">
        <a href="javascript:history.back()" class="">
          <i class="am-icon-chevron-left"></i>
        </a>
      </div>

      <h1 class="am-header-title">
        <a href="#title-link" class="">登录</a>
      </h1>

      <div class="am-header-right am-header-nav">

        <router-link to="/home" class="">
          <i class="am-header-icon am-icon-home"></i>
        </router-link>
      </div>
    </header>

    <div class="login">
      <form method="post" action=" ">
        <ul class="login-ul">
          <li class="login-li">

            <input v-model='user' name="username" placeholder="手机" class="login-input-phone" type="tel">
            <i class="am-icon-user"></i>

          </li>
          <li class="login-li">

            <input v-model='psd' name="password" placeholder="密码" class="login-input-password" type="password">
            <i class="am-icon-unlock-alt"></i>
          </li>
        </ul>
      </form>


      <div class="login-btn">
        <a @click="login" class="am-btn am-btn-warning am-round mb20">登陆</a>
        <router-link to="/reg" class="am-btn am-btn-default am-round login-other-btn">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        psd: '',
      }
    },
    methods: {
      login() {
        if (!this.user) {
          alert("请输入用户名");
        } else if (!this.psd) {
          alert("请输入密码");
          //有值才能ajax请求
        } else {
          console.log('1-ajax', this.user, this.psd);
          this.$http({
            url: "http://localhost:3000/login",
            method: "post",
            //向接口传参
            //data: "username=" + this.user + "&password=" +  this.psd ,
            data: {'username': this.user, 'password': this.psd}
          }).then((res) => {
            console.log('2-http_success：', res.data);
            if (res.data.error == 0) {
              console.log('3-http-ok');
              console.log(res.data)
              this.$router.push({'path': '/member'})
            } else if (res.data.error == 1) {
              alert("用户名或密码错误");
            }
          }).catch((res) => {
            console.log('4--http_err', res)
          })
        }
      }
    }
  }

</script>