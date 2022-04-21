import PageHome from '@/pages/PageHome.vue'
import PageThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound'
import PageForum from '@/pages/PageForum.vue'
import Category from '@/pages/PageCategory.vue'
import PageProfile from '@/pages/PageProfile'
import { createRouter, createWebHistory} from 'vue-router'
import sourceData from '@/data.json'
const routes = [
    { 
      path: '/',
       name:'Home',
        component: PageHome },
        {
          path: '/forum/:id',
          name: 'Forum',
          component: PageForum,
          props: true
        },
        {
          path: '/me',
          name: 'PageProfile',
          component: PageProfile,
          
        },
        {
          path: '/me/edit',
          name: 'PageProfileEdit',
          component: PageProfile,
          props:{ edit:true }
          
        },
        {
          path: '/category/:id',
          name: 'Category',
          component: Category,
          props: true
        },
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