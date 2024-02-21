<template>
  <div class="about">
    <h2>About JSON Formatter & Linter</h2>
    <p>Welcome to JSON Formatter & Linter, your go-to tool for formatting and validating JSON data quickly and easily.</p>

    <h3>Features:</h3>
    <ul>
      <li><strong>Format JSON Data:</strong> Paste or type your JSON data into the input area, and with the click of a button, we'll format it into a human-readable format with proper indentation.</li>
      <li><strong>Lint JSON Data:</strong> Ensure your JSON data is well-formed and error-free. Our linter checks for syntax errors and provides helpful feedback to assist in debugging.</li>
      <li><strong>Syntax Highlighting:</strong> Enjoy improved readability with syntax highlighting, making it easier to distinguish between different elements of your JSON data.</li>
      <li><strong>Copy to Clipboard:</strong> Need to share your formatted JSON data? Simply click the "Copy" button to quickly copy it to your clipboard for easy sharing and pasting.</li>
    </ul>

    <h3>Why Use JSON Formatter & Linter?</h3>
    <ul>
      <li><strong>Save Time:</strong> No more manually formatting JSON data or hunting down syntax errors. Our tool streamlines the process, saving you valuable time.</li>
      <li><strong>Improve Productivity:</strong> Whether you're a developer working with JSON data daily or just need to format JSON occasionally, our tool helps improve your productivity and efficiency.</li>
      <li><strong>Enhance Readability:</strong> By formatting your JSON data into a clear and structured format, it becomes easier to read and understand, aiding in collaboration and communication.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.about h2 {
  margin-bottom: 10px;
}

.about h3 {
  margin-top: 20px;
  margin-bottom: 5px;
}

.about ul {
  list-style-type: none;
  padding-left: 20px;
}

.about li {
  margin-bottom: 10px;
}
</style>
