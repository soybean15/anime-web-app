<template>
  <div class="title">Popular</div>
  <div class="place-content-center">
    <swiper-container
      class="flex h-40 sm:h-96 mx-1.5"
      ref="{swiperRef}"
      :slidesPerView="3"
      :centeredSlides="true"
      :rewind="true" 
      :spaceBetween="10"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
        }"
      :breakpoints="{
      1060: {
        slidesPerView: 5,
        spaceBetween:50
      },
      1190: {
        slidesPerView: 4,
        spaceBetween:10
      },
      1300: {
        slidesPerView: 5,
        spaceBetween:40
      }
        }"


    >
      <swiper-slide
        v-for="anime in animeList"
        :key="anime.mal_id"
        class="slider   w-full"
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
          "https://api.jikan.moe/v4/top/anime"
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
      console.log("size from popular: " + response.value.data.length);

      response.value.data.forEach((res) => {
        console.log(res.images.jpg.image_url)
        const anime = {
          mal_id: res.mal_id,
          title: res.title,
          description:'',
          images: {
            image_url: res.images.jpg.image_url,
            small_image_url: res.images.jpg.small_image_url,
            large_image_url: res.images.jpg.large_image_url,

          },
          type: res.type,
          episodes: res.episodes,
          year: res.year
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
  height: 90%;
}

</style>