import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).use(router).mount('#app')

// let app = createApp(App)


// app.config.globalProperties.darkMode =false

// app.use(router).mount('#app')