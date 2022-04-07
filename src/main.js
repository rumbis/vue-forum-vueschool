import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const ForumApp = createApp(App)
ForumApp.use(router)
ForumApp.mount('#app')

