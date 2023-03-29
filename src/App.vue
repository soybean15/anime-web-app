<template >
  <div :class="{'bg-slate-800':darkMode, 'bg-white':!darkMode } " >
   <HeaderView/>
 
  
   
 
      <router-view/>
      <button @click="toggleDarkMode">DarkMode</button>
   

</div>

</template>

<script>
import { ref } from 'vue'
import HeaderView from './views/components/Header.vue'
export default{
  components :{ HeaderView },
  setup(){
    
    const darkMode = ref(false)

    const toggleDarkMode=()=>{
      darkMode.value = !darkMode.value
      console.log( darkMode.value)
    }

    return {
      darkMode,
      toggleDarkMode
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
.dark{
  background:black;
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
}
</style>
