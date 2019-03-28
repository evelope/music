import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//默认样式
import "@/assets/css-less/default.css"
//适配
import 'lib-flexible'
//引入Mintui   移动端组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "@/assets/font/iconfont.css"
//水波纹效果
import waves from "@/components/global/waves/index.js"
// touch 自定义事件
import "@/components/global/swipeTouch/touch.js"

Vue.use(MintUI)
Vue.use(waves)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
