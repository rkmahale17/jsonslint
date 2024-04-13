<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>

    <AppHeader/>
   
  </header>
  <main class=" m-auto mt-5 mx-3">
  <RouterView />
 </main>
 <Footer />

  
</template>

<style scoped>
header {
  line-height: 1.5;
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

  header .wrapper {
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
  }
  main{
  }
}
</style>
