<script setup lang="ts">
import JsonEditor from './JsonEditor.vue'
import JsonInfo from './JsonInfo.vue'

import About from './About.vue'


</script>

<template>
<main>
 


    <json-editor/>
    
    <JsonInfo/>
   
  </main>
  
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
