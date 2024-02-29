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
    routes,
    mode:'history',
    scrollBehavior (to, from, savedPosition) {
      document.getElementById('app').scrollIntoView();
      
    }
  })
  
  router.beforeEach((to, from, next) => {
    setTimeout(function () {
      window.scrollTo(0, 0);
      next();
  },2);

  });
  
  export default router