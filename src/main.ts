import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import hyRequest from './service'

import router from './router'
import store from './store'
const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      config.headers['token'] = '123'
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})
