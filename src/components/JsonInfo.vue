<template>
  <div class="json-info">
    <div class="m-2">
  <h4>
    Features
  </h4>
   <div class="d-flex">
    <h6 class="mx-2"> <span class="badge  text-bg-success">Json Lint</span></h6>
  <h6 class="mx-2"> <span class="badge   text-bg-success">Json Fromatter</span></h6>
  <h6 class="mx-2"> <span class="badge  text-bg-success">Json Validator</span></h6>
   </div>

 </div>
    <h2 class="title">JSON Format Information</h2>
    <p class="description">
      JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.
    </p>
    <div class="error-list">
      <h3 class="subtitle">Common Errors</h3>
      <ul>
        <li>Missing or misplaced commas</li>
        <li>Missing or incorrect quotation marks around keys or values</li>
        <li>Invalid escape characters</li>
        <li>Trailing commas</li>
        <li>Incorrect data types (e.g., using a string instead of a number)</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h2 class="title">Json Questions </h2>
     <div class="list-group">
      <router-link :to="getCleanUrl(questions.question)" class="list-group-item list-group-item-action text-bold" v-for="questions in qa" v-bind:key="questions.id">{{ questions.id }}</router-link>

  
</div>
  </div>
  <div class="additional-info">
      <h3 class="subtitle">Additional Information</h3>
      <p>
        For more information about JSON format, refer to the <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer">JSON.org</a> website.
      </p>
      <hr>
    </div>
  </div>
  
 
</template>

<script>
import { qaMapping } from '@/const';

export default {
  name: 'JsonInfo',
  data() {
    return {
       qa:qaMapping
    }
  },
  methods:{
    getCleanUrl(id) {
      const url ='/qa/'+id;
      // Encode special characters in the URL using encodeURIComponent
      return url.split(' ').join('_')
    }
  }
}
</script>

<style scoped>
.json-info {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 20px;
}

.error-list {
  margin-bottom: 20px;
}

.error-list ul {
  list-style-type: disc;
  margin-left: 20px;
}

.additional-info {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

</style>
