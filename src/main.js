import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/style/common.less'
createApp(App).use(store).use(router).use(lazyPlugin, {
  loading: require('@/assets/images/loading.png'), // 图片加载时默认图片
  error: require('@/assets/images/loading.gif')// 图片加载失败时默认图片
}).use(ElementPlus).mount('#app')
