<template>



    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <div class="mr-4"> <DarkmodeToggle @click="$emit('toggleDarkMode')" :darkMode="darkMode"/></div>
   
    <span class="font-semibold text-xl tracking-tight">AniMING</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow" v-for="navItem in navItems" :key="navItem.name">
        <router-link :to="{ name: navItem.route }" ><li class="block text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">{{navItem.name}}</li></router-link>
     
    </div>


  </div>
</nav>











  
</template>

<script>
import { ref, watchEffect } from 'vue'
import DarkmodeToggle from "../components/other/DarkModeToggle.vue"
export default {
    components:{DarkmodeToggle},
    props:['darkMode'],
    
    setup(){
        const isMobile =ref(false)

        const navItems = ref([
            {name:'Home', route:'home', icon:null},
            {name:'Anime', route:'list', icon:null},
            {name:'Genre', route:'genre', icon:null},
            {name:'Favorites', route:'genre', icon:null},
        ])
   

      
        window.addEventListener("resize", function () {
            isMobile.value = window.innerWidth<600
        })

        

        return {navItems,isMobile}
    }

}
</script>

<style>
.nav-container{
    padding: 3em;
    display: flex;
    justify-content:center;
    align-items: center;
    gap:3em;
}

.nav-search{
   
   
    flex-grow: 2;
    display: flex;
    justify-content: end;
    gap:1em;
}
.nav-search-label{
    flex-shrink: 0;
}



</style>