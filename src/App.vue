<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import JsonEditor from './components/JsonEditor.vue'
import JsonInfo from './components/JsonInfo.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'


</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <json-editor/>
    <JsonInfo/>
   
  </main>
  <About/>
  <!-- <Footer /> -->

  
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
      margin: 0 auto;
  padding: 2rem;
   max-width: 1280px;
  }
}
</style>
