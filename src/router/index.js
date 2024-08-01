import About from '../components/About.vue'
import Home from '../components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Privacy from '../components/Privacy.vue'
import qa from '../components/qa.vue'
import editor2 from '@/components/editor2.vue'
import DiffConfigList from '@/components/Diff.vue'
import TermsOfService from '@/components/TermsOfService.vue'
import JsonPath from '@/components/JsonPath.vue'
import.meta.env.BASE_URL
const routes = [
   
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/json-path',
      name: 'JsonPath',
      component: JsonPath
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
    {
      path: '/diff-checker',
      name: 'DiffConfigList',
      component: DiffConfigList
    },
    
    {
      path: '/qa/:id',
      name: 'qa',
      component: qa
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfService',
      component: TermsOfService
      
    },
    {
      path: '/editor-2',
      name: 'editor2',
      component: editor2    },
   
  ]
  
  const router = createRouter({
    history: createWebHistory('/'),
    routes,
    mode:'history',
    scrollBehavior (to, from, savedPosition) {
      document.getElementsByTagName('html')[0].scrollIntoView();
      
    }
  })
  
  // router.beforeEach((to, from, next) => {
  //   setTimeout(function () {
  //     window.scrollTo(0, 0);
  //     next();
  // },2);

  // });
  
  export default router