<template>
  <div class="reg">
    <header data-am-widget="header" class="am-header am-header-default joan-head2 ">
      <div class="am-header-left am-header-nav">
        <a href="javascript:history.back()" class="">
          <i class="am-icon-chevron-left"></i>
        </a>
      </div>

      <h1 class="am-header-title">
        <a href="#title-link" class="">注册</a>
      </h1>

      <div class="am-header-right am-header-nav">

        <router-link to="/home" class="">
          <i class="am-header-icon am-icon-home"></i>
        </router-link>
      </div>
    </header>

    <div class="login">
      <form method="post" action=" ">
        <ul class="login-ul reg-ul">
          <li class="login-li">
            <span>手机号码</span>
            <input v-model='user' name="username" placeholder="手机" class=" " type="tel">
            <i class="am-icon-mobile"></i>

          </li>
          <li class="login-li">
            <span>登录密码</span>
            <input v-model='psd' name="password" placeholder="密码" class=" " type="password">
            <i class="am-icon-unlock-alt"></i>
          </li>
          <li class="login-li">
            <span>再次输入密码</span>
            <input v-model='confirm' name="password" placeholder="密码" class=" " type="password">
            <i class="am-icon-unlock-alt"></i>
          </li>

          <li class="login-li">
            <span>手机验证码</span>
            <input name="yzm" placeholder="验证码" class="yzm-input" type="text">
            <button class="am-btn am-btn-warning">获取验证码</button>
          </li>
        </ul>
      </form>

      <div class="login-btn">
        <a @click="reg" class="am-btn am-btn-warning am-round mt20">注册</a>
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
          confirm: '',
        }
      },
      methods: {
        reg() {
          console.log(this.user,this.psd,this.confirm)
          if (!this.user||!this.psd||!this.confirm) alert("请输入用户名和密码!");

          if (this.psd != this.confirm) alert('请保持密码一致!');
          console.log('testUser',testUser(this.user));
          if (testUser(this.user)) {
            if (this.user && this.psd && (this.psd == this.confirm)) {
              console.log('ajax')
              this.$http({
                method: 'post',
                url: "http://localhost:3000/register",
                data: {'username': this.user, 'password': this.psd}
              }).then((res) => {

                console.log('res',res.data)
                if (res.data.error == 0) {
                  alert("注册成功！");
                  this.$router.push({'path': '/login'})

                } else if (res.data.error == "1") {
                  alert("用户名已存在");
                }
              }).catch((res) => {
                console.log("login_http_err",res)
              })
            }
          }

          // 验证手机号
          function testUser(user) {
            var pattern = /((^1[34578]\d{9}$)|)/;
            return pattern.test(user);
          }
        }
      }
    }

</script>
