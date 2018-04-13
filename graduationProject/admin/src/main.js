// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '../store'
import VueSocketio from 'vue-socket.io'; 
import {mapActions}  from "vuex"

Vue.use(VueSocketio, 'http://127.0.0.1:3000/');
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  methods: {
    ...mapActions(['someActions']),
  },
  sockets: {
    //连接成功广播
    connect() {
      console.log("服务器已连接");
    },
    //接收数据,向vuex数据状态管理发送
    message(data) {
      this.someActions({data})
    }
  }
  
})
