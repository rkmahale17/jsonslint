<template>
  <div class="json-info">
    <div class="m-2">
  <h3 class="title">
    Why to use JSONS Lint tool ?
  </h3>
   <div class="d-block">
  <p>

Using our website for your JSON needs ensures a seamless and efficient experience, leveraging a comprehensive suite of tools designed for all your JSON requirements. Our JSON formatter swiftly organizes your JSON data into an easily readable format, eliminating any confusion that might arise from disorganized code. With our JSON lint, you can quickly identify and fix any issues, ensuring your JSON is clean and error-free. Whether you need sample data for testing or examples to learn from, our JSON sample data feature provides a variety of ready-to-use templates. Additionally, our JSON format checker meticulously verifies your JSON structure, helping you maintain consistency and accuracy in your projects.

  </p>
  <p>Our platform goes beyond basic formatting and linting with advanced features like syntax verification and JSON schema validation. The syntax verifier checks your JSON code for any syntax errors, ensuring it adheres to proper standards and preventing potential issues in your applications. Our JSON schema validator is indispensable for developers needing to validate their JSON data against predefined schemas, guaranteeing data integrity and compatibility. By using our website, you not only save time but also enhance the quality and reliability of your JSON data, making it the ultimate destination for all your JSON formatting, checking, and validation needs.
</p>
  
</div>
<hr>

 </div>
 
 <JsonValidationPage></JsonValidationPage>

    <br>
    
    <div class="my-4">
      <h5>Common Json Questions </h5>
     <div class="list-group">
      <router-link :to="getCleanUrl(questions.question)" class="list-group-item list-group-item-action text-bold" v-for="questions in qa" v-bind:key="questions.id">{{ questions.id }}</router-link>

</div>
  </div>
  <div class="additional-info">
      <h3 >Additional Information</h3>
      <p>
        For more information about JSON format, refer to the <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer">JSON.org</a> website.
      </p>
      <hr>
    </div>
  </div>
</template>

<script>
import { qaMapping } from '@/const';
import JsonValidationPage from  "../components/JsonValidationPage.vue"
export default {
  name: 'JsonInfo',
  components: {
    JsonValidationPage
  },
  data() {
    return {
       qa:qaMapping
    }
  },
  methods:{
    getCleanUrl(id) {
      const url ='/qa/'+id;
      // Encode special characters in the URL using encodeURIComponent
      return url.split(' ').join('-')
    }
  }
}
</script>

<style scoped>
.json-info {
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  background: var(--background-color);
}
h1{
  font-size:20px;
  border-bottom:1px solid rgb(225, 223, 223)


}

.json-info h2{
  font-size:20px;
  border-bottom:1px solid rgb(225, 223, 223)
}

.title {
  font-size: 18px;
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
