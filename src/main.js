import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
import './style.css'
import App from './App.vue'


const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
