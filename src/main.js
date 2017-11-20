import Vue from 'vue'
import App from './App.vue'

//引入公共资源
import './assets/css/amazeui.min.css';
import './assets/css/app.css';

// 引用本地库出现bug，原因-->本地JQ文件没有导出！可以用(es6)export default $--》es5不可以
//方式一 本地引入 部分引入
/*import $ from './assets/js/jquery.min.js';
import amazeui from './assets/js/amazeui.min.js';*/
//方式三 本地引入 相当于标签引入
import './assets/js/jquery.min.js';
import './assets/js/amazeui.min.js';
//方式二 npm 库
// import $ from 'jquery';
// import amazeui from 'amazeui';
import './assets/fonts/fontawesome-webfont.eot';
import './assets/fonts/fontawesome-webfont.svg';
import './assets/fonts/fontawesome-webfont.woff';
import './assets/fonts/fontawesome-webfont.woff2';
import './assets/fonts/fontawesome-webfont.ttf';


//引入路由
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//传递配置
import routes from './router.config';
//生成实例，传递配置
const router = new VueRouter({
  routes: routes,
  mode: 'history' //路由模式: 路径模式
});


//引入axios
import axios from 'axios';
axios.defaults.withCredentials=true;//统一携带跨源凭证
Vue.prototype.$http = axios;


//引入全局过滤器

import filters from './filters/'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

//引入状态管理
import store from './store';

//引入loading组件
import loading from './components/loading';

//拦截器->interceptors，统一配置相关插件，处理流程中做拦截操作
axios.interceptors.request.use(function (config) {
  //显示loading
  store.dispatch('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // 消失loading
  setTimeout(function () {
    store.dispatch('hideLoading');
  }, 500)
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.use(loading);

//全局引入
import 'animate.css';

new Vue({
  el: '#app',
  // data:{
  //   bNav:true,
  //   bFoot:true,
  //   buycar:[]
  // },
  render: h => h(App),
  router,//注册路由
  store,
  loading
});
