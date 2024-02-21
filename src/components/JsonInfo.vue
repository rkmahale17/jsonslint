<template>
  <div class="json-info">
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
    <div class="additional-info">
      <h3 class="subtitle">Additional Information</h3>
      <p>
        For more information about JSON format, refer to the <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer">JSON.org</a> website.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonInfo',
}
</script>

<style scoped>
.json-info {
  font-family: Arial, sans-serif;
  margin: 0 auto;
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
