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
    <RouterLink class="navbar-brand" :to="`/`">
      { Jsons Lint }
    </RouterLink> 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/`">Fortmat Json</RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/compare-code`">Compare Code</RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/about`">About</RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/privacy`">Privacy Policy</RouterLink> 

        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/qa/What_is_JSON_Formatter_and_how_does_it_work`">Json Q&A </RouterLink> 

        </li>
      
      </ul>
    </div>
  </div>
</nav>
</template>



<style scoped>

a:hover{
  border-bottom: 4px solid blue !important;
  box-sizing: border-box;
  background: #d9d9f5;

}
.active-link{
  border-bottom: 4px solid blue !important;
  box-sizing: border-box;
  background: #d9d9f5 !important;
}
a{
  border-bottom: 4px solid transparent !important;

}
li{
  border-radius: 1px !important;
  text-decoration: none !important;
  padding: 8px 15px !important;
}
.navbar{
  box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 5px 0 rgba(0,0,0,.23);
  height:56px !important;
}
#navbarNav{
  justify-content: flex-end;
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
