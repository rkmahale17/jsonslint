<template>
  <!-- <nav class="navbar navbar-dark bg-dark stikcy-top">
    <div class="container-fluid">
      <RouterLink class="text-decoration-none" :to="`/`"><h1 class="">Home</h1></RouterLink> 
      
      <RouterLink class="text-decoration-none" :to="`/`"><h1 class="">{...} JSONS Lint</h1></RouterLink> 
    
      <ul class="nav nav-pills nav-fill">
   <li class="nav-item">
    <RouterLink class="text-decoration-none:to="`/about`">About Us</RouterLink>
  </li>
 
  
 
</ul>
    </div> -->
  <!-- Navbar content -->
<!-- 
</nav> -->
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" :to="`/`" >
      <div class="d-flex">
        <div class="d-flex"><span style="background: #0ed901;
    border-radius: 25px;
    width: 40px;
    height: 40px;
    display: block;
    text-align: center; "> <span style="
    text-align: center;
    font-size: larger;">{ }</span></span></div>
      <span class="mx-2 pt-1">JSONS LINT</span>
      </div>
      
      
    
    </RouterLink> 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/`">Format Json</RouterLink> 
        </li>
        <!-- <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/json-path`">Json Path</RouterLink> 
        </li> -->
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/diff-checker`">Diff Checker</RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/qa/What-is-JSON-Formatter-and-how-does-it-work`">Json Q&A </RouterLink> 
        </li>
        
        <li class="nav-item">
        
          <a href="https://insidefulreview.blogspot.com" target="_blank"  class="nav-link" rel="noopener noreferrer">Blog</a>

        </li>
        
       
      
      </ul>
    </div>
  </div>
</nav>
</template>



<style scoped>

a:hover{
  border-bottom: 4px solid #0fd900 !important;
  box-sizing: border-box;
  background: #d9d9f5;
  padding:4px;
  padding-top:10px

}
.active-link{
  border-bottom: 3px solid #0fd900 !important;
  box-sizing: border-box;
  padding: 4px;
  padding-top:10px
}
a{
  border-bottom: 4px solid transparent !important;

}
li{
  border-radius: 1px !important;
  text-decoration: none !important;
  padding: 8px 15px !important;
}
.navbar-toggler{
  margin-bottom: 10px !important;
}
.navbar{
  box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 5px 0 rgba(0,0,0,.23);
  height:56px !important;
   background-color: #fff;
}
#navbarNav{
  justify-content: flex-end;
  z-index: 10;
}
.nav-link{
  color:var(--bs-navbar-brand-color);
}
@media (max-width: 991px) {

  ul{
  margin-top: 10px;
    background: #fffdfd;
    /* border: 1px solid gray; */
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23);
}

}


/* Add styles for other elements on the right side if needed */
</style>
