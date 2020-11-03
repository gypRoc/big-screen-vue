import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'

//  按需导入vue-awesome图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chart-bar.js'
import 'vue-awesome/icons/chart-area.js'
import 'vue-awesome/icons/chart-pie.js'
import 'vue-awesome/icons/chart-line.js'
import 'vue-awesome/icons/align-left.js'

// 适配 flex
import '@/common/flexible.js'
// 引入全局css
import './assets/scss/style.scss'

// 引入 Echart
import echarts from 'echarts'

Vue.use(dataV)

// 全局注册图标
Vue.component('icon', Icon)

// 将echarts绑定到Vue原型上
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
