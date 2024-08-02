<template>
  <div>
  <footer class="footer">
 
    <div class="container">
        <div class="footer-top justify-content-center">
            <div class="row justify-content-center">
                
                <div class="col-md-4 col-lg-4 ">
                    <div class="footer-title">
                        <ul>
                          <li>Site Map </li>
                        </ul>
                    </div>
                    <ul>
                      <!-- qa/What-is-JSON-Formatter-and-how-does-it-work -->
                       
                        <li>    <RouterLink class="text-decoration-none navbar-brand home-title nav-link" :to="`/`" >Home</RouterLink></li>
                        <li>    <RouterLink class="text-decoration-none navbar-brand home-title nav-link" :to="`/diff-checker`" >Diff Checker</RouterLink></li>
                        <li>    <RouterLink class="text-decoration-none navbar-brand home-title nav-link" :to="`/qa/What-is-JSON-Formatter-and-how-does-it-work`" >Json Q&A</RouterLink></li>

          <a href="https://insidefulreview.blogspot.com" target="_blank"  class="nav-link" rel="noopener noreferrer">Blog</a>
                        <li> </li>
                        <li>    <RouterLink class="text-decoration-none navbar-brand home-title nav-link" :to="`/about`" >About</RouterLink></li>
                    </ul>
                </div>

                <div class="col-md-4 col-lg-4 page-more-info">
                    <div class="footer-title">
                      <ul><li>Popular JSON Connects </li></ul>
                        
                    </div>
                    <ul>
                      <li><a target="_blank" href="https://www.json.org/">JSON.org</a></li>
          <li><a target="_blank" href="https://jsonlint.com/">JSONLint</a></li>
          <li><a target="_blank" href="https://jsonformatter.curiousconcept.com/">JSON Formatter & Validator</a></li>
          <li><a target="_blank" href="https://www.jsoneditoronline.org/">JSON Editor Online</a></li>
          <li><a target="_blank" href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></li>
                        
                    </ul>
                </div>
              
            </div>
        </div>
        <hr>
        <div class="footer-bottom">
            <div class="row">
                <div class="col-sm-6 d-flex justify-content-start">
                   <RouterLink class="navbar-brand" :to="`/`" >
      <div class="d-flex">
        <div class="d-flex"><span style="background: #0ed901;
    border-radius: 25px;
    width: 40px;
    height: 40px;
    display: block;
    text-align: center; "> <span style="
    text-align: center;
    font-size: x-large;">{ }</span></span></div>
      <span class="mx-2 pt-2">JSONS LINT</span>
      </div>
      
      
    
    </RouterLink> 
    <div class="d-flex pt-2 justify-conetent-start text-sm">
                  <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/privacy`">Policy</RouterLink>
                  |
                  <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/terms-of-service`">Terms</RouterLink>
                </div>
                </div>
                <div class="col-sm-6 d-flex justify-content-center pt-2">
                    <p>JSONS LINT @ 2024 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>

  
</div>
  </template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      jsonData: "",
      error: ""
    };
  },

  methods: {
    scrollToTop() {
    // window.scrollTo(0,0);
  }
  }
  }
</script>

<style scoped>
.footer{
  margin-top:20px;
  padding-top:20px;


  background: var(--background-color);
  padding: 25px;;
  ul {
    padding: 0;
    li{
      font-size: 15px;
    list-style: none;
    padding: 4px 0px;
    a{
      text-decoration: none;
      color: var(--text-color);
    }
  }
}
}

</style>
