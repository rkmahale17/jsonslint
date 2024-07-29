<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header class="fix-toolbar">

    <AppHeader/>
   
  </header>
  <main class=" m-auto mt-5 container main-content">
  <RouterView />
 </main>
 <Footer />

  
</template>

<style scoped>
header {
  line-height: 1.5;
}
.main-content {
  padding-top: 52px !important;
}

.logo {
  display: block;
}

@media (min-width: 1024px) {
  header {
    /* display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    
  }
  .fix-toolbar{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 9;
  }
  header .wrapper {
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
  }
  
}
</style>
