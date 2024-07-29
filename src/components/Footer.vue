<template>
  <div>
  <footer class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="row">
                
                <div class="col-md-6 col-lg-3 page-more-info">
                    <div class="footer-title">
                        <h4>Page links</h4>
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>    <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/about`" >About</RouterLink></li>
                        <li>    <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/privacy`">Privacy Policy</RouterLink></li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-6 page-more-info">
                    <div class="footer-title">
                        <h4>Popular JSON Links </h4>
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
                <div class="col-sm-4">
                  <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/privacy`">Privacy Policy</RouterLink>
                   
                </div>
                <div class="col-sm-8">
                    <p>JSONS LINT @ 2024 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>

  
  <div><br></div>
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
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
h1,
        h2,
        h3,
        h4,
        h5,
        h6 {}
        a,
        a:hover,
        a:focus,
        a:active {
            text-decoration: none;
            outline: none;
        }
        
        a,
        a:active,
        a:focus {
            color: #333;
            text-decoration: none;
            transition-timing-function: ease-in-out;
            -ms-transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -webkit-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            transition-duration: .2s;
            -ms-transition-duration: .2s;
            -moz-transition-duration: .2s;
            -webkit-transition-duration: .2s;
            -o-transition-duration: .2s;
        }
        
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        img {
    max-width: 100%;
    height: auto;
}
        section {
            padding: 60px 0;
           /* min-height: 100vh;*/
        }
.btn {
    padding: 14px 25px;
    text-transform: uppercase;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
}
.red-btn {
    background: rgb(14, 217, 1);
    border: 2px solid rgb(14, 217, 1);
    color: #fff;
}

.red-btn:hover{
    background: rgb(14, 217, 1);
    color: #fff;
    border-color: #ffffff;
}

/*---------footer---------*/
footer {
    background-color: white;
   
    color: black;
    padding: 22px 0;
    font-size: 17px;
}
footer h3 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
}
footer h4 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    display: inline-block;
    margin-bottom: 2px;
}
.about-footer li i {
    position: absolute;
    left: 0;
}
.about-footer li {
    padding-left: 6px;
    position: relative;
    margin-bottom: 40px;
}

.about-footer ul {
    margin-top: 40px;
}

footer a {
    color: black
}

footer a:hover {
    color: #03a9f4
}
.footer-title {
    border-bottom: 2px solid rgb(14, 217, 1);
    padding-bottom: 25px;
    margin-bottom: 35px;
}

ul.footer-social {
    float: right;
}

ul.footer-social li {
    display: inline;
    margin-right: 16px;
}

ul.footer-social i {
    width: 30px;
    height: 30px;
    background: #fff;
    color: #222025;
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
    font-size: 16px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    font-weight: 800;
}

ul.footer-social li:last-child {
    margin-right: 0px;
}

ul.footer-social i:hover {
    background: #ed1b24;
    color: #fff;
}

.page-more-info li {
    margin-bottom: 31px;
}

footer .table td:first-child {
    font-weight: 600;
    padding-left: 33px;
}

footer .table td:last-child {text-align: right;}
footer .table td {
    padding: 0px;
    border: 0;
}

footer .table tr {
}

footer .table td i {
    position: absolute;
    left: 0px;
    font-size: 21px;
    top: 6px;
}

footer .table td {
    position: relative;
    padding: 4px 0;
}
.footer-logo td {
    padding-right: 4px !important;
}

.footer-logo td:last-child {
    padding-right: 0px !important;
}
footer hr {
    border-color: #9294a0;
}

.footer-bottom p {
    text-align: right;
}
.footer-bottom {
    margin-top: 30px;
}
.open-hours hr {
    margin: 30px 0;
}

body {
  font-family: "Poppins", sans-serif;
  position: relative;
  font-weight: 400;
  font-size: 15px;
}

/* Responsive Css Code created by : Shift Code Design */

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}

p {
  font-size: 16px;
  line-height: 30px;
  color: #898b96;
  font-weight: 300;
}

h4 {
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-weight: 400;
  padding: 0;
}

a {
  color: #5867dd;
}

.footer-big {
  padding: 105px 0 65px 0;
}

.footer-big .footer-widget {
  margin-bottom: 40px;
}

.footer--light {
  background: #001441;
}

.footer-big .footer-menu ul li a,
.footer-big p,
.footer-big ul li {
  color: #898b96;
}

/* Responsive Css Code created by : Shift Code Design */

.footer-menu {
  padding-left: 48px;
}

.footer-menu ul li a {
  font-size: 15px;
  line-height: 32px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.footer-menu ul li a:hover {
  color: #ce1a19;
}

.footer-widget-title {
  line-height: 30px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
}

.mini-footer {
  background: #000041;
  text-align: center;
  padding: 32px 0;
}

.mini-footer p {
  margin: 0;
  line-height: 26px;
  font-size: 15px;
  color: #999;
}

.mini-footer p a {
  color: #ce1a19;
  font-weight: 500;
}

.mini-footer p a:hover {
  color: #34bfa3;
}

/* Responsive Css Code created by : Shift Code Design */

.widget-about img {
  display: block;
  margin-bottom: 30px;
  max-width: 70%;
}

.widget-about p {
  font-weight: 400;
}

.widget-about .contact-details {
  margin: 30px 0 0 0;
}

.widget-about .contact-details li {
  margin-bottom: 10px;
}

.widget-about .contact-details li:last-child {
  margin-bottom: 0;
}

.widget-about .contact-details li i {
  padding-right: 10px;
  color: #333;
}

.widget-about .contact-details li a {
  color: #5867dd;
}

/* Responsive Css Code created by : Shift Code Design */

@media (max-width: 991px) {
  .footer-menu {
    padding-left: 0;
  }
  .widget-about img {
    max-width: 50%;
  }
}

</style>
