<template>
  <h1>this is list</h1>
</template>

<script>
import getAnime from '@/data/jikan-api/getAnimeSearch'
import { ref } from 'vue'
export default {

  setup(){
    const animeList = ref(getAnime())
    console.log(animeList)
    console.log("animeList")
  }

}
</script>

<style>

</style>