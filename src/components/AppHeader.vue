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
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/json-path`">Json Path</RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/diff-checker`">Diff Checker</RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" activeClass="active-link" :to="`/qa/What-is-JSON-Formatter-and-how-does-it-work`">Json Q&A </RouterLink> 
        </li>
        
        <li class="nav-item">
        
          <a href="https://insidefulreview.blogspot.com" target="_blank"  class="nav-link" rel="noopener noreferrer">Blog</a>

        </li>

        <li class="dark-light-mode">
          <input type="checkbox"  id="darkmode-toggle" v-model="modeTheme" @click="changeOfTheme($event)" />
<label for="darkmode-toggle">
	<svg version="1.1" class="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve">

		<rect x="152.994" y="58.921" transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)" width="40.001" height="16" />
		<rect x="46.9" y="164.979" transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)" width="40.001" height="16" />
		<rect x="46.947" y="315.048" transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)" width="40.001" height="16" />

		<rect x="164.966" y="409.112" transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)" width="16" height="39.999" />

		<rect x="303.031" y="421.036" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)" width="40.001" height="16" />

		<rect x="409.088" y="315.018" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)" width="40.001" height="16" />

		<rect x="409.054" y="165.011" transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)" width="40.001" height="16" />
		<rect x="315.001" y="46.895" transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)" width="16" height="39.999" />
		<path d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
				c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z" />
		<rect x="240" width="16" height="72" />
		<rect x="62.097" y="90.096" transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)" width="71.999" height="16" />
		<rect y="240" width="72" height="16" />

		<rect x="90.091" y="361.915" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)" width="16" height="71.999" />
		<rect x="240" y="424" width="16" height="72" />

		<rect x="361.881" y="389.915" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)" width="71.999" height="16" />
		<rect x="424" y="240" width="72" height="16" />
		<rect x="389.911" y="62.091" transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)" width="16" height="71.999" />
	</svg>
	<svg version="1.1" class="moon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49.739 49.739" style="enable-background:new 0 0 49.739 49.739;" xml:space="preserve">
		<path d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
       c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
       c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
       C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
       c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
       c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z" />
	</svg>
</label>
        </li>
        
       
      
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default{
data(){
  return {
    modeTheme: false,
    theme: null,
  }
},

methods:{
  changeOfTheme(e){
    // this.modeTheme = !this.modeTheme;
    if(this.modeTheme){
      this.theme  =  'dark'
    } else {
      this.theme =  'light'
    }
    this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);

      document.body.setAttribute('data-bs-theme', this.theme);
    console.log(this.modeTheme, e)
  }
},
mounted(){
  const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme) {
     
  
      if(savedTheme == 'dark'){
        this.modeTheme = true;
      }
      if(savedTheme == 'light'){
        this.modeTheme = false;
      }
      this.theme = savedTheme;
      document.body.setAttribute('data-bs-theme', this.theme);
    }
    else {
      this.modeTheme =false;
    }

}
}
</script>


<style scoped>

a:hover{
  border-bottom: 4px solid #0fd900 !important;
  box-sizing: border-box;
  /* background: #d9d9f5; */
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
   background-color: var(--background-color);
}
#navbarNav{
  justify-content: flex-end;
  z-index: 10;
}
.nav-link{
  color:var(--bs-navbar-brand-color);
}

.dark-light-mode{

label {
	width: 60px;
	height: 30px;
  bottom:14px;
	position: relative;
	display: block;
	background: #ebebeb;
	border-radius: 200px;
	box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
		inset 0px -5px 15px rgba(255, 255, 255, 0.4);
	cursor: pointer;
	transition: 0.3s;
	&:after {
    content: "";
            width: 22px;
            height: 22px;
            position: absolute;
            top: 5px;
            left: 3px;
	
		background: linear-gradient(180deg, #ffcc89, #d8860b);
		border-radius: 30px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}
	svg {
		position: absolute;
		width: 15px;
		top: 10px;
		z-index: 100;
		&.sun {
			left: 6px;
      top: 8px;
			fill: #fff;
			transition: 0.3s;
		}
		&.moon {
			left: 37px;
      top:8px;
			fill: #7e7e7e;
			transition: 0.3s;
		}
	}
}

input {
	width: 0;
	height: 0;
	visibility: hidden;
	&:checked + label {
		background: #242424;
		&:after {
			left: 54px;
			transform: translateX(-100%);
			background: linear-gradient(180deg, #777, #3a3a3a);
		}
		svg {
			&.sun {
				fill: #7e7e7e;
			}
			&.moon {
				fill: #fff;
			}
		}
		+ .background {
			background: #242424;
		}
	}
	&:active:after {
		width: 40px;
	}
}


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
