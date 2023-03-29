<template>
    <div class="nav-container  top-0 left-0 right-0">
        <DarkmodeToggle @click="$emit('toggleDarkMode')" :darkMode="darkMode"/>
        <ul v-for="navItem in navItems" :key="navItem.name">
        <router-link :to="{ name: navItem.route }" ><li class="nav-item  text-red-800">{{navItem.name}}</li></router-link>
       
        </ul>

        <div class="nav-search">
            <div class="nav-search-label">Search</div>
            <div class="nav-search-input"><input type="" placeholder="Search"></div>
        </div>
        
    </div>
  
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