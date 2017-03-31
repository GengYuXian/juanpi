// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//导入vue文件
import Vue from 'vue'

//引入路由
import VueRouter from 'vue-router'

//导入app文件
import App from './App'

//使用路由
Vue.use(VueRouter)

Vue.config.productionTip = false

//路由的编写
//1、引入对应的文件
import Home from './pages/home/home'
import Category from './pages/category/category'
import Cart from './pages/cart/cart'
import Mine from './pages/mine/mine'

//2、编写规则
const routes = [
	{ path: '/', component: Home},
	{ path: '/home', component: Home},
	{ path: '/category', component: Category},
	{ path: '/cart', component: Cart},
	{ path: '/mine', component: Mine}
]

//3、创建路由对象
const router = new VueRouter({
	routes  //(缩写)相当于 routes: routes
})

//4、将路由对象，交给vue实例即可
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }, //将从外界引入的app注册为局部组件
  router
})
