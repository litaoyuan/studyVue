import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import News from './components/News.vue'
import Content from './components/Content.vue'
import './libs/miu/css/mui.min.css'
import HomePage from './components/homepage/HomePage.vue'
import MsgPage from './components/homepage/MsgPage.vue'
import CarPage from './components/homepage/CarPage.vue'
import MyPage from './components/homepage/MyPage.vue'

import 'bootstrap/dist/css/bootstrap.css'
//UI布局样式
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//l=路由框架
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/app', component: App },
  { path: '/content/:aid', component: Content },
  { path: '/news', component: News },
  { path: '*', redirect: '/home' },
  { path: '/homePage', component: HomePage },
  { path: '/msgPage', component: MsgPage },
  { path: '/carPage', component: CarPage },
  { path: '/myPage', component: MyPage },

]
const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active',
});

//网络请求数据框架
import VueResource from 'vue-resource'
Vue.use(VueResource);
// Vue.config.productionTip = false


new Vue({
  mounted() {
    window.androidToVue = this.androidToVue;
  },
  methods: {
    androidToVue(str) {
      this.$toast({ message: str, position: "bottom", duration: 1000 });
    },
  },
  router,
  watch: {//监听路由跳转
    "$route.path": function (newVal, old) {
      window.console.log(newVal + "----" + old);
    }
  },
  render: h => h(App),
}).$mount('#app')
