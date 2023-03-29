<template>
  <div class="title" :class="darkModeClass">Popular</div>
  <div class="place-content-center ">
    <swiper-container
      class="flex h-40 sm:h-96 mx-1.5  overflow-visible "
      ref="{swiperRef}"
      :slidesPerView="3"
      :initialSlide= "1"
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
        slidesPerView:4,
        spaceBetween:10
      },

      1190: {
        slidesPerView: 5,
        spaceBetween:10
      },
      1300: {
        initialSlide:3,
        slidesPerView: 5,
        spaceBetween:10
      }
        }"
        :onProgress = "onProgress"
        :effect="fade"
        :slideToClickedSlide = "true"
 
      
     


    >
      <swiper-slide
        v-for="(anime) in animeList"
        :key="anime.mal_id"
        class="slider w-full"
      >
        <PopularCard :anime="anime" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>
  
  <script>
import { register } from "swiper/element/bundle";
import { ref, onUpdated,watch} from "vue";
import PopularCard from "./PopularCard.vue";
import getPopular from "../../../../data/jikan-api/getPopular"

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



register();

export default {
  components: {
    PopularCard,
  },
  setup() {
    const animeList = getPopular()
    
    
    const activeIndex = ref(null)
 
    const spaceBetween = 0;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(swiper.activeIndex)
      activeIndex.value =swiper.activeIndex
      
    };

    const onSlideChange = (e) => {
      const [swiper, progress] = e.detail;
      
     
      console.log(swiper.activeIndex);
    };



      onUpdated(() => {
        // text content should be the same as current `count.value`
       
      })




    return {
      spaceBetween,
      onProgress,
      onSlideChange,
      animeList,
      activeIndex
     
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
.swiper-slide-active{
  transform: scale(1);
  transition: all 0.5s ease-in-out;
}
swiper-slide:not(.swiper-slide-active) {
  transform: scale(.9);
  transition: all 0.5s ease-in-out;
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