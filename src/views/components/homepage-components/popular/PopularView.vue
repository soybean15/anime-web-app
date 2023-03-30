<template>
  <div class="flex title" >
    <div class="flex-none">
      Popular
      <button @click="onSwitchContent">
        <div v-if="onAnime">Anime</div>
        <div v-else>Manga</div>
      </button>
    </div>
    <div class="grow"></div>
    <div class="flex-none">View all</div>
  </div>
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
import { ref, onUpdated,reactive,watchEffect,onMounted, onCreated} from "vue";
import PopularCard from "./PopularCard.vue";
import getPopular from "../../../../data/jikan-api/getPopular"
import getPopularManga from "../../../../data/jikan-api/getPopularManga"

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
    const onAnime = ref(true)
    let state= reactive({items: getPopular()});
   
    console.log(state.items)
   
    const onSwitchContent = ()=>{
      onAnime.value = !onAnime.value
      if(onAnime.value){
        //itemList.value = getPopular()  
        state.items = getPopular()  
       }else{
        //itemList.value = getPopularManga()  
        state.items = getPopularManga()  
       
       }
          
        // console.log(itemList)

    }


    
    
    const activeIndex = ref(null)
 
    const spaceBetween = 0;
   

    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
   
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
      activeIndex,
      onSwitchContent,
      onAnime,state

     
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