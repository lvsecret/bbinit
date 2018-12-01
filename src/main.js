import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入全局css
import './assets/site/css/style.css'

//导入全局axios
//设置到Vue的原型上,那么所有实例化出来的对象和组件都能够共享这个属性
//一般来说 设置到原型上的属性 vue中会使用$作为前缀原来区分普通的属性
import axios from 'axios'
Vue.prototype.$axios=axios;

//导入全局moment.js
import moment from 'moment'

//导入element.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//全局过滤器
Vue.filter('shortTime', value=> {
//  console.log(moment(value).format('YYYY(⊙o⊙)MM(⊙o⊙)MDD'));
  return moment(value).format('YYYY(⊙o⊙)MM(⊙o⊙)MDD');
})



//使用axios的方式设置基础地址
axios.defaults.baseURL = 'http://111.230.232.110:8899/';

//0.导入路由
//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//1.定义(路由)组件
import index from './components/index.vue'
import detail from './components/02.detail.vue'

//2.定义路由规则
let routes= [
  {
    path:'/',
    //重定向到首页
    redirect:'/index'
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/detail/:artID',
    component:detail
  },

]
//3.创建 router 实例，然后传 `routes` 配置
let router=new VueRouter({
  routes// (缩写) 相当于 routes: routes
})
new Vue({
  render: h => h(App),
  //4.传入路由对象
  router
}).$mount('#app')
