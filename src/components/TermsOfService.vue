<template>
    <div class="terms-of-service">
      <h4>Terms of Service</h4>
      <p class="text-end">Effective Date:<strong> 01 Apr, 2024</strong></p>
  
      <h5>1. Acceptance of Terms</h5>
      <p>
        By accessing and using JSONSLINT (“the Service”), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
      </p>
       <hr>
      <h5>2. Description of Service</h5>
      <p>
        JSONSLINT provides tools for JSON formatting, comparing, linting (“the Tools”). The Service is available to you via our website JSONSLINT.COM.
      </p>
      <hr>
      <h5>3. User Responsibilities</h5>
      <ul>
        <li><strong>Account Registration:</strong> You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information.</li>
        <li><strong>Accuracy of Information:</strong> You agree to provide accurate and complete information when using the Service.</li>
        <li><strong>Compliance with Laws:</strong> You agree to use the Service in compliance with all applicable laws and regulations.</li>
      </ul>
      <hr>
      <h5>4. Prohibited Activities</h5>
      <p>Users are prohibited from:</p>
      <ul>
        <li>Using the Service for any illegal or unauthorized purpose.</li>
        <li>Attempting to gain unauthorized access to any part of the Service.</li>
        <li>Engaging in any activity that disrupts or interferes with the Service.</li>
      </ul>
      <hr>
      <h5>5. Intellectual Property</h5>
      <p>
        All content and materials on the Service, including but not limited to text, graphics, logos, and software, are the property of JSONSLINT or its licensors and are protected by intellectual property laws. You may not use any of the content without our express written permission.
      </p>
      <hr>
      <h5>6. Limitation of Liability</h5>
      <p>
        JSONSLINT is not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use the Service. We do not guarantee the accuracy, completeness, or usefulness of any information provided through the Service.
      </p>
      <hr>
      <h5>7. Privacy</h5>
      <p>
        Your use of the Service is also governed by our Privacy Policy, which can be found at                   <RouterLink class="text-decoration-none navbar-brand home-title active-link" :to="`/privacy`">Policy</RouterLink>
.
      </p>
      <hr>
      <h5>8. Termination</h5>
      <p>
        We reserve the right to terminate or suspend your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service.
      </p>
      <hr>
      <h5>9. Changes to Terms</h5>
      <p>
        We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
      </p>
      <hr>
      <h5>10. Governing Law</h5>
      <p>
        These Terms of Service are governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.
      </p>
      <hr>
      <h5>11. Contact Information</h5>
      <p>
        If you have any questions about these Terms, please contact us at mahale.usha9@gmail.com .
      </p>
      <hr>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TermsOfService'
  }
  </script>
  
  <style scoped>
  .terms-of-service {
    background: var(--background-color);
    padding: 20px;
    h5 {
        margin-top:20px;
        font-size:18px;
    }
  }
  
  .terms-of-service h1,
  .terms-of-service h3 {
    color: #333;
  }
  
  .terms-of-service p,
  .terms-of-service ul {
    margin-bottom: 15px;
  }
  
  .terms-of-service ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  </style>
  