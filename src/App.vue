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
    console.log(darkModeClass.value)
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.dark-mode{
  background:rgb(27, 27, 27);
  color: rgb(241 245 249);;
  transition: background 1s;
}
.light-mode{
  background:rgb(247, 247, 247);
  color: rgb(30 41 59);

  transition: background 1s;
}



nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;

  box-shadow: rgba(188, 188, 192, 0.575) 0px 7px 29px 0px;;
}

.box-shadow{
 
  box-shadow: v-bind('boxShadowColor');
}






</style>
