<template >
  <div :class="darkModeClass" >

   <HeaderView @toggleDarkMode="toggleDarkMode" :darkMode="darkMode"/>
  

  <router-view/>
   

</div>

</template>

<script>
import { ref } from 'vue'


import HeaderView from './views/components/Header.vue'

export default{
  components :{ HeaderView },
  setup(){

    const dm = localStorage.getItem('darkMode');
    
    const darkMode = ref(dm=='true')
    console.log(dm)
    console.log(darkMode.value)
    const darkModeClass = ref(darkMode.value==true ? 'dark-mode': 'light-mode')
    const boxShadowColor = ref('rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px')

    const toggleDarkMode=()=>{
      darkMode.value = !darkMode.value
      localStorage.setItem('darkMode',darkMode.value);
      if(darkMode.value ){

        
        darkModeClass.value = "dark-mode"
        boxShadowColor.value =''
      }else{
        darkModeClass.value = "light-mode"
        boxShadowColor.value ='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
      }
     
    }

    return {
      darkMode,
      toggleDarkMode,
      darkModeClass,
      boxShadowColor
    }

  }

}
</script>
<style>
body{
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.dark-mode{
  background:#171917;
  color: rgb(241 245 249);;
  transition: background 1s;
}
.light-mode{
  background:rgb(247, 247, 247);
  color: rgb(32, 32, 32);

  transition: background 1s;
}
.dark-mode .active-button{
  color: rgb(12, 167, 12);
}

.light-mode .active-button{
  
  color: #72A0C1;
}


.dark-mode .on-surface{
  background-color: 	#1e1e1e;
  color:#dce1e3;
  
}

.light-mode .on-surface{
  background-color: 	#f2f2f2 ;
  color: #383838;
}




nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #cdd1d6;
}

nav a.router-link-exact-active {
  color: #b8ae25;

  /* box-shadow: rgba(188, 188, 192, 0.575) 0px 7px 29px 0px;; */
}

.box-shadow{
 
  box-shadow: v-bind('boxShadowColor');
}






</style>
