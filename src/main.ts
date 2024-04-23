import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/es/toast/style'

const app = createApp(App)

app.use(router)

app.mount('#app')
