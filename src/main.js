import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import './index.css'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(Toast)
app.use(router)
app.use(pinia)
app.mount('#app')
