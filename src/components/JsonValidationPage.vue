<template>
  
    <div class="json-validation-page">

      <section>
        <h5>What is JSON ?</h5>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is built on two structures:

          <ul>
          <li>A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.</li>
          <li>An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.</li>
        </ul>
        </p>
        <hr>
      </section>
  
      <section>
        <h5 class="pt-4">JSON Schema</h5>
        <p>
          JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It defines the structure of JSON data by specifying required properties, types, and patterns.
        </p>
        <i>Example of a JSON Schema</i>
        <pre><code>
  {
    "title": "Person",
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "age": {
        "type": "integer",
        "minimum": 0
      }
    },
    "required": ["firstName", "lastName"]
  }
        </code></pre>
        <hr>

      </section>
  
      <section>
        <h5 class="pt-4" >Common JSON Syntax Errors</h5>
        <ul>
          <li><i>Missing Quotes:</i> Property names must be in double quotes.</li>
          <li><i>Trailing Commas:</i> JSON does not support trailing commas.</li>
          <li><i>Invalid Data Types:</i> JSON supports strings, numbers, objects, arrays, booleans, and null.</li>
          <li><i>Unescaped Characters:</i> Special characters in strings must be escaped.</li>
        </ul>
        <hr>
        <i>Examples of Syntax Errors</i>
        <pre><code>
  // Incorrect JSON
  {
    firstName: "John", // Property names must be in double quotes
    "lastName": "Doe",
    "age": 25,
  }
  
  // Correct JSON
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
  }
        </code></pre>
        <hr>
      </section>
  
      <section>
        <h5 class="pt-4">Using JSON Validation Tools</h5>
        <p>
          JSON validation tools help ensure that your JSON data adheres to the specified schema and is free of syntax errors. These tools can:
        </p>
        <ul>
          <li>Validate JSON against a schema.</li>
          <li>Identify and highlight syntax errors.</li>
          <li>Format and beautify JSON data for readability.</li>
        </ul>
        <hr>
        <h5>Example</h5>
        <p>Use our JSON validation tool to check your JSON data:</p>
        <button @click="goToValidationTool">Go to JSON Validation Tool</button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JsonValidationPage',
    methods: {
      goToValidationTool() {
        // Navigate to the JSON validation tool page
        window.scrollTo(0,0)
      }
    }
  }
  </script>
  
  <style >
  .json-validation-page {
    padding: 20px 0px;

    h5{
      margin-top:20px;
      font-size: 18px;
      margin-bottom:20px;
      
    }
  }
  
  .json-validation-page h1,
  .json-validation-page h2,
  .json-validation-page h4 {
    color: var(--text-color);
  }
  
  .json-validation-page p,
  .json-validation-page ul,
  .json-validation-page pre {
    margin-bottom: 15px;
  }
  
  .json-validation-page ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .json-validation-page pre {
    background-color: var(--background-color-pre);
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
  
  .json-validation-page button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .json-validation-page button:hover {
    background-color: #0056b3;
  }
  </style>
  