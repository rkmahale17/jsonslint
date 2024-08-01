<template>
    <div class="info-container">
      <h4>Introduction to JSONata Queries</h4>
      <p>
        JSONata is a lightweight query and transformation language for JSON data. It provides a powerful syntax to extract, filter, and transform JSON data in a simple and readable way.
      </p>
      <hr>
      <h5>Basic Syntax</h5>
      <p>
        JSONata queries are expressed in a concise, functional style. Here are some basic examples:
      </p>
      <ul>
        <li><strong>Field Selection:</strong> <code>$.name</code> - Selects the value of the "name" field.</li>
        <li><strong>Array Indexing:</strong> <code>$.items[0]</code> - Selects the first element from the "items" array.</li>
        <li><strong>Filter Expressions:</strong> <code>$.items[price > 100]</code> - Filters items with a price greater than 100.</li>
        <li><strong>Projection:</strong> <code>$.items.{ "name": $.name, "price": $.price }</code> - Projects new objects with specific fields.</li>
      </ul>
      <hr>
      <h5>Functions</h5>
      <p>
        JSONata includes several built-in functions that can be used in expressions. Some examples include:
      </p>
      <ul>
        <li><strong>String Functions:</strong> <code>length($)</code>, <code>concat(a, b)</code>, <code>upper($)</code></li>
        <li><strong>Array Functions:</strong> <code>map(expr)</code>, <code>reduce(expr, initialValue)</code></li>
        <li><strong>Mathematical Functions:</strong> <code>sum($)</code>, <code>avg($)</code>, <code>min($)</code>, <code>max($)</code></li>
      </ul>
      <hr>
      <h5>Examples</h5>
      <p>
        Here are some example JSONata queries:
      </p>
      <pre>
        <code>
          $.orders[total > 100]  // Returns orders with a total greater than 100
          $.products.{ "name": $.name, "price": $.price }  // Projects name and price fields from products
          $.items[price &lt; 50].{ "item": $.name, "discountedPrice": $.price * 0.9 }  // Items with discounted prices
        </code>
      </pre>
      <hr>
      <h5>Documentation Links</h5>
      <p>
        For more detailed information on JSONata queries and functions, refer to the following resources:
      </p>
      <ul>
        <li><a href="https://jsonata.org/" target="_blank">Official JSONata Documentation</a></li>
        <li><a href="https://docs.jsonata.org/overview.html" target="_blank">JSONata Documentation Guide</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoComponent',
  };
  </script>
  
  <style scoped>
  .info-container {
    padding: 20px;
    margin: 0 auto;
  }
  
  pre {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 10px;
    overflow-x: auto;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  a {
    color: #42b983;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  