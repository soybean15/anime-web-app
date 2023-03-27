<template>

    <div class="item-card max-w-sm rounded  shadow-lg" v-dragscroll>
        <img
          class="object-cover h-48 w-96"
          :src="anime.images.image_url"
          alt="Sunset in the mountains"
        />
      
          <div class="item-title">{{ snippet }}</div>

    
        
      </div>
  
</template>

<script>

import { computed } from 'vue'
export default {
    props:['anime'],
    setup(props){
        const snippet = computed(()=>{
            if(props.anime.title.length<30){
              return props.anime.title
            }else
            return props.anime.title.substring(0,30)+'...'
        })
        return {snippet}
    }

}
</script>

<style scoped>
.item-title{
  font-size: 1em;
  
  color: rgb(31, 30, 30);
}
.item-card{
  height: 17em;
  width: 10em;
}
</style>