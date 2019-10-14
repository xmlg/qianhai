import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import echarts from "echarts";
import './plugins/element.js'
import '../src/assets/css/font.css'


Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')