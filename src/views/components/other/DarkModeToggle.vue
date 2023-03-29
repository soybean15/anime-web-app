<template>
    <div class="dark-mode-toggle h-5 w-5 pl-0.5">
        <div v-if="!darkMode">
            <img src="../../../assets/icons/sun.png">
        </div>
        <div v-else>
            <img src="../../../assets/icons/moon.png">
        </div>
    </div>
  
</template>

<script>
export default {
    props:['darkMode']

}
</script>

<style>
.dark-mode-toggle{
    cursor: pointer;
}
</style>