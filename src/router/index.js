import About from '../components/About.vue'
import Home from '../components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Privacy from '../components/Privacy.vue'
import.meta.env.BASE_URL

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
   
  ]
  
  const router = createRouter({
    history: createWebHistory('/'),
    routes
  })
  
  export default router