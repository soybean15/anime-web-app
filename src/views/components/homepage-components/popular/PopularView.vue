<template>
  <div class="title">Popular</div>
  <div class="place-content-center">
    <swiper-container
      class="mx-8"
      ref="{swiperRef}"
      :slidesPerView="3"
      :centeredSlides="true"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
      :spaceBetween="50"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"

    >
      <swiper-slide
        v-for="anime in animeList"
        :key="anime.mal_id"
        class="slider h-96 w-64"
      >
        <PopularCard :anime="anime"/>
      </swiper-slide>
    </swiper-container>
  </div>
</template>
  
  <script>
import { register } from "swiper/element/bundle";
import { ref } from "vue";
import PopularCard from "./PopularCard.vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


register();

export default {
  components: {
    PopularCard,
  },
  setup() {
    const spaceBetween = 0;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    };

    const onSlideChange = (e) => {
      console.log("slide changed");
    };

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
            large_image_url: res.entry[0].images.jpg.large_image_url,
          },
        };
        animeList.value.push(anime);
      });
    };

    load();

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
      animeList
     
    };
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
.slider {
  margin-bottom: 50px;
}
</style>