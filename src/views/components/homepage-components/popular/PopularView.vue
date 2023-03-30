<template>
  <div class="flex title">
    <div class="flex-none">
      Popular
    
    </div>
    <div class="grow"></div>
    <div class="flex-none">

      <button :class="{'active-button':isAnimeActive}" @click="onAnime">
        <div>Anime</div>
      </button>
     |
      <button  :class="{'active-button':!isAnimeActive}" @click="onManga">
        <div>Manga</div>
     
      </button>
    </div>
  </div>



  <div class="place-content-center">

      <swiper-container
      class="flex h-40 sm:h-96 mx-1.5 overflow-visible"
      ref="{swiperRef}"
      :slidesPerView="3"
      :initialSlide="1"
      :centeredSlides="true"
      :rewind="true"
      :spaceBetween="10"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        900: {
          initialSlide: 2,
          slidesPerView: 4,
          spaceBetween: 10,
        },

        1190: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1300: {
          initialSlide: 3,
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }"
      :onProgress="onProgress"
      :effect="fade"
      :slideToClickedSlide="true"
    >

      <swiper-slide
        v-for="item in state.items"
        :key="item.mal_id"
        class="slider"
      >
        <PopularCard :item="item" />
      </swiper-slide>
    </swiper-container>

    

  </div>
</template>
  
  <script>
import { register } from "swiper/element/bundle";
import {
  ref,
  onUpdated,
  reactive,

} from "vue";
import PopularCard from "./PopularCard.vue";

import getPopular from "../../../../data/jikan-api/getPopular";
import getPopularManga from "../../../../data/jikan-api/getPopularManga";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

register();

export default {
  components: {
    PopularCard,
    
  },
  setup() {
    //  let itemList = ref()  //this returns ref([])//reactive
    
    let state = reactive({ items: getPopular() });

    const activeIndex = ref(null);
    const spaceBetween = 0;
    const isAnimeActive = ref(true)




    const onManga = ()=>{
      state.items = getPopularManga();
      isAnimeActive.value = false
    }
    const onAnime = ()=>{
      state.items = getPopular();
      isAnimeActive.value = true
    }

   
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;

      activeIndex.value = swiper.activeIndex;
    };

    const onSlideChange = (e) => {
      const [swiper, progress] = e.detail;

      console.log(swiper.activeIndex);
    };

    onUpdated(() => {
      // text content should be the same as current `count.value`
    });

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
      activeIndex,
      onAnime,
      onManga,
      isAnimeActive,
      state,
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

.swiper-slide-active {
  transform: scale(1);

}
swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.9);

}
.active-button{
  
}
/* .swiper-slide-next {
  transform: scale(.9);
  transition: all 0.5s ease-in-out;
}
.swiper-slide-prev {
  transform: scale(.9);
  transition: all 0.5s ease-in-out;
} */
</style>