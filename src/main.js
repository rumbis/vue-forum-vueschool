import { createApp } from 'vue'
import App from './App.vue'
import AppDate from '@/components/AppDate.vue'
import router from '@/router'
import store from '@/store'
// import dayjs from 'dayjs'
const ForumApp = createApp(App)
ForumApp.use(router)
ForumApp.use(store)

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  ForumApp.component(baseComponentName, baseComponentConfig)
})


ForumApp.mount('#app')

