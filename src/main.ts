import './assets/main.css'
// Import our custom CSS
import './scss/style.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
