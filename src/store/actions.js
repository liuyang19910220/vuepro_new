import * as types from './types';
import $ from 'jquery'

const actions = {
  showLoading: ({commit, state}) => {
    commit(types.SHOW_LOADING);
  },
  hideLoading: ({commit, state}) => {
    commit(types.HIDE_LOADING);
  },
  showNav: ({commit, state}) => {
    commit(types.SHOW_NAV);
  },
  hideNav: ({commit, state}) => {
    commit(types.HIDE_NAV);
  },
  showFoot: ({commit, state}) => {
    commit(types.SHOW_FOOT);
  },
  hideFoot: ({commit, state}) => {
    commit(types.HIDE_FOOT);
  },

  readSql: ({commit, state}, arg) => {
    //0,可以收到detail传来的负载 this.$store.dispatch('readSql',this.detail.id);
    console.log('actions接受detail点击添加的参数:', arg)
    //兜库
    $.ajax({
      url: 'http://localhost:3000/index',
    }).then((res) => {
      console.log('成功访问index数据库回调res[arg]:', res[arg]);
      commit(types.READ_SQL, res[arg]);

    }).catch((res) => {
      console.log(res);
    })
  },

  increment: ({commit, state}) => {
    commit(types.INCREMENT);
  },
  decrement: ({commit, state}) => {
    if(state.count<=1){
      state.count=1
    }
    commit(types.DECREMENT);
  },

}
export default actions;