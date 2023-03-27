<template>
    <div class ="title">Anime recommendations</div>
    <div class="list-container " v-dragscroll>
      <div
        class="item md:container md:mx-auto"
        v-for="anime in animeList"
        :key="anime.ma"
      >
  
      <AnimeCard :anime="anime"/>
  
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import AnimeCard from './AnimeCard.vue'
  import { dragscroll } from 'vue-dragscroll'
  // @ is an alias to /src
  
  export default {
    name: "HomeView",
    components: {AnimeCard},
    directives: {
      dragscroll
    },
  
    setup() {
      console.log("hello");
      const animeList = ref([]);
      const animeResponse = ref([]);
      const error = ref(null);
  
      const load = async () => {
        try {
          let data = await fetch(
            "https://api.jikan.moe/v4/recommendations/anime"
          );
          if (!data.ok) {
            throw Error("no Data available");
          }
  
          animeResponse.value = await data.json();
  
          mapResponse(animeResponse);
        } catch (err) {
          error.value = err.message;
        }
      };
  
      const mapResponse = (response) => {
        console.log("size: " + response.value.data.length);
  
        response.value.data.forEach((res) => {
          const anime = {
            mal_id: res.mal_id,
            title: res.entry[0].title,
            description: res.content,
            images: {
              image_url: res.entry[0].images.jpg.image_url,
              small_image_url: res.entry[0].images.jpg.small_image_url,
              large_image_url: res.entry[0].images.jpg.large_image_url
            },
          };
          animeList.value.push(anime);
        });
      };
  
      load();
  
      return { animeList };
    },
  };
  </script>
  
  <style>
  .title{
    text-align: start;
    margin: 1em;
    font-weight: bold;
    font-size: 1.2em;
  }
  .home {
    display: flex;
  
    border: 1px solid black;
  }
  .list-container{
    display: flex;
    gap: 1em;
    overflow: auto;
    overflow-x: hidden;
    margin:1em;
    height: 18em;
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
  