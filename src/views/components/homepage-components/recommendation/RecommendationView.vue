<template>
  <div class="title">Anime recommendations</div>
  <div class="list-container" v-dragscroll:nochilddrag>
    <div
      class="item md:container md:mx-auto"
      v-for="anime in animeList"
      :key="anime.mal_id"
    >
    <AnimeCard :anime="anime" />
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import AnimeCard from "./AnimeCard.vue";
import { dragscroll } from "vue-dragscroll";
import getRecommendations from "../../../../data/jikan-api/getRecommendations"
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { AnimeCard },
  directives: {
    dragscroll,
  },

  setup() {


    const  animeList = getRecommendations()  
   
    return { animeList };
  },
};
</script>
  
  <style>
.title {
  text-align: start;
  margin: 1em;
  font-weight: bold;
  font-size: 1.2em;
}
.home {
  display: flex;

  border: 1px solid black;
}
.list-container {
  display: flex;
  gap: 1em;
  overflow: auto;
  overflow-x: hidden;
  margin: 1em;
}
.container {
  background: blue;

  gap: 1;
}
.item {
  display: flex;
  justify-content: center;
}
</style>
  