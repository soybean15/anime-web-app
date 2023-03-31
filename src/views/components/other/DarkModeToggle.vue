<template>
    <div class="dark-mode-toggle h-5 w-5 pl-0.5">
        <div v-if="!darkMode">
            <img class="dark-mode-sun darkmode-img" src="../../../assets/icons/sun.png" title="Dark Mode">
        </div>
        <div v-else>
            <img  class="dark-mode-moon darkmode-img" src="../../../assets/icons/moon.png" title="Light Mode">
        </div>
    </div>
  
</template>

<script>
export default {
    props:['darkMode']

}
</script>

<style>
.darkmode-toggle{
    cursor: pointer;
}
.darkmode-img{

  transition: transform .7s ease-in-out;

  cursor: pointer;

}
.darkmode-img:hover {
  transform: rotate(360deg)  scale(1.5);

}

</style>