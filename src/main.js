/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2023-08-04 17:04:58
 * @LastEditors: sueRim
 * @LastEditTime: 2023-08-04 17:07:03
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')