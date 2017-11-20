
import home from './components/home.vue';
import shoplist from './components/shoplist.vue';
import member from './components/member.vue';
import shopcar from './components/shopcar.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import detail from './components/detail.vue';
import talk from './components/talk.vue';
import brand from './components/brand.vue';
import myorder from './components/myorder.vue';
import mine from './components/mine.vue';
import error from './components/error.vue';


const routes=[
  {path:'/home',component:home},
  {path:'/shoplist',component:shoplist},
  {path:'/shopcar',component:shopcar},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/talk',component:talk},
  {path:'/detail/:id',component:detail},
  {path:'/brand',component:brand},
  {path:'/member',component:member},
  {path:'/myorder',component:myorder},
  {path:'/mine',component:mine},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},


  /*//配置member的子路由
  {
    path:'/member',
    component:member,
    children:[
      {path:'myorder',component:myorder},
      {path:'mygift',component:mygift},
      // {path:'myorder',component:myorder},
      // {path:'myorder',component:myorder},
      // {path:'myorder',component:myorder},

    ]
  },*/
]
export default routes;