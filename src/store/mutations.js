import * as types from './types';

const mutations={
  [types.SHOW_LOADING]:(state)=>{
    state.bLoading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bLoading=false;
  },
  [types.SHOW_NAV]:(state)=>{
    state.bNav=true;
  },
  [types.HIDE_NAV]:(state)=>{
    state.bNav=false;
  },
  [types.SHOW_FOOT]:(state)=>{
    state.bFoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.bFoot=false;
  },
  //data->收负载
  [types.READ_SQL]:(state,data)=>{
    console.log('sql from mutations:',data);
    state.buycar.push(data);
  },

  [types.INCREMENT]:(state)=>{
    state.count++;
  },
  [types.DECREMENT]:(state)=>{
    state.count--;
  },
};
export default mutations;