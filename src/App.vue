<template>
  <div id="app">
    <!--<headerbar></headerbar>-->
    <loading v-show="getLoading"></loading>
    <!--<keep-alive>网络环境下使用-->
    <transition  enterActiveClass="animated fadeIn" leaveActiveClass="">
      <router-view></router-view>
    </transition>
    <!--</keep-alive>-->
    <!--footerbar是公共组件-->
    <footerbar v-show="getFoot"></footerbar>
  </div>
</template>

<script>
  import footerbar from './components/footerbar.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'app',
    data() {
      return {
        msg: ''
      }
    },
    components: {
      footerbar
    },
    computed: mapGetters([
      'getFoot', 'getLoading'
    ]),

    mounted() {
      this.changePath(this.$route.path);
    },

    methods: {
      //状态管理
      changePath(path) {
        if (/brand|reg|login/.test(path)) {
          this.$store.dispatch('hideFoot');
        }
        ;
        if (/detail|home|member|myorder|mygift|shopcar|shoplist|talk/.test(path)) {
          this.$store.dispatch('showFoot');
        }
      },


    },
//监听选项
    watch: {
      $route(to) {
// console.log(to.path)//获取路由指向--》/home.../shoplist..//问actions要东西
        this.changePath(to.path);
      }
    }


  }
</script>

<style>

</style>
