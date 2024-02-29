<template>
  <nav class="navbar navbar-dark bg-dark stikcy-top">
    <div class="container-fluid">
      <RouterLink class="text-decoration-none navbar-brand home-title  " :to="`/`"><h1 class="fs-2 text fw-bold font-monospace main-heading">{...} JSONS Lint</h1></RouterLink> 
      <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/about`">About Us</RouterLink>
   
  </li>
  <li class="nav-item">
    <RouterLink class="text-decoration-none navbar-brand home-title" :to="`/privacy`">Privacy Policy</RouterLink>
   
  </li>
  
 
</ul>
    </div>
  <!-- Navbar content -->
</nav>
  
</template>



<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}
.main-heading{
  font-size: 18px !important;
}

.navbar-brand
{
  font-family: 'Lato', sans-serif;
  color:grey;
  font-size: 16px;
}
.home-title{
  color:white;
}

.left-side h1 {
  margin: 0;
  font-size: 1.5rem;
}

/* Add styles for other elements on the right side if needed */
</style>
