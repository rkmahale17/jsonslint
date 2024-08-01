<template>
    <div>
        <label for="file-upload">
            <div class="btn d-block  btn-primary  rounded">
                <i class="bi bi-filetype-json"></i>
            </div>
         
         
    </label>
      <input type="file" @change="handleFileUpload" accept=".json" class="d-none" id="file-upload" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'JsonFileUploader',
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file && file.type === 'application/json') {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
                
              const json = JSON.parse(e.target.result);
              this.$emit('file-uploaded', json);
            } catch (error) {
              alert('Invalid JSON file.');
            }
          };
          reader.readAsText(file);
        } else {
          alert('Please upload a valid JSON file.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  input {
    display: block;
    margin-top: 10px;
  }
  </style>
  