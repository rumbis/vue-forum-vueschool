import { createApp } from 'vue'
import App from './App.vue'
import AppDate from '@/components/AppDate.vue'
import router from '@/router'
// import dayjs from 'dayjs'
const ForumApp = createApp(App)
ForumApp.use(router)
ForumApp.component('AppDate', AppDate)
ForumApp.mount('#app')

