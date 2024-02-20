<template>
  <div>
    <textarea v-model="jsonData" placeholder="Enter JSON data here"></textarea>
    <button @click="lintJson">Lint JSON</button>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: '',
      error: ''
    };
  },
  methods: {
    lintJson() {
      try {
        JSON.parse(this.jsonData);
        this.error = ''; // Clear error if JSON is valid
      } catch (error) {
        this.error = error.message; // Display error message
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
