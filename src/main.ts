import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store, { setupStore } from './store'
const app = createApp(App)

app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
