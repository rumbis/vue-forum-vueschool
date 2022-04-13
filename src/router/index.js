import PageHome from '@/pages/PageHome.vue'
import PageThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound'
import { createRouter, createWebHistory} from 'vue-router'
import sourceData from '@/data.json'
const routes = [
    { 
      path: '/',
       name:'Home',
        component: PageHome },
    { 
      path: '/thread/:id',
     name:'PageThreadShow',
      component: PageThreadShow,
       props: true ,
       beforeEnter (to, from, next) {
        
        const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
        if (threadExists) { 
        
        return next()
      }else {
        next({
           name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
      })
      }


       }
      },
    {
      path: '/:pathMatch(.*)*',
     name:'NotFound',
      component: NotFound 
    },
    
  ]
  export default createRouter({
    
    history: createWebHistory(),
    routes
  })