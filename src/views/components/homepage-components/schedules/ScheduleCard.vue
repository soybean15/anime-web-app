<template>
  <div
    class="flex h-40 m-1.5 border-solid on-surface box-shadow rounded-lg"
  >
    <div class="relative w-2/5">
      <img
        class="rounded-l-lg h-full w-full sched-img"
        :src="schedule.images.jpg.image_url"
      />
      
        
        <div class="absolute bottom-0 left-0 ">
            
                <div class="flex  bg-stone-700 opacity-80 p-0.5 m-0.5 rounded-lg h-6 text-color">
                    <div class=" ">
                        <img src="@/assets/icons/fire.png" class="h-5"  title="Popularity" >
                    </div>
                    <div class="text-xs p-0.5 mt-0.5 mr-4">
                    
                        {{ schedule.popularity }}
                    </div>

                    <div class=" ">
                        <img src="@/assets/icons/star.png" class="h-5" title="Score"  >
                    </div>
                    <div class="text-xs p-0.5 mt-0.5 mr-0.5">
                    
                        {{ score}}
                    </div>
                </div>  
            

               
       
        </div>
    </div>

    <div class="w-9/12">
      <div class="flex">
        <div class="flex flex-col p-1.5 w-11/12">
          <div class="text-left text-xs font-semibold">
            {{ schedule.title }}
          </div>
          <div class="flex text-left text-xs text-slate-500">
            <div class=" font-bold mr-1">Schedule:</div> {{ broadcast }} 
          </div>

          <div class="flex text-left text-xs text-slate-500">
            <div class="font-bold mr-1">Duration: </div>{{ schedule.duration }}
          </div>
          <div class="flex text-left text-xs text-slate-500">
            <div class="font-bold mr-1">Status: </div><div class="text-green-600">{{ schedule.status }}</div>
          </div>

          <div class="flex text-left text-xs text-slate-500">
            <div class="font-bold mr-1">Rating: </div>{{ schedule.rating }}
          </div>

        </div>

        <div class="text-left p-1.5 text-xs font-semibold">
          {{ schedule.type }}
        </div>
      </div>



      <div class="text-left pl-1.5 text-xs ">
        <div class="sypnosis font-semibold">Syponosis</div>

        {{ descriptionSnippet }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["schedule"],
  setup(props) {
    const descriptionSnippet = computed(() => {
      if (props.schedule.synopsis) {
        if (props.schedule.synopsis.length < 100) {
          return props.schedule.synopsis;
        } else return props.schedule.synopsis.substring(0, 100) + "...";
      } else return "No Details";
    });

    const score = computed(()=>{

        if(props.schedule.score){
            return props.schedule.score
        }else return "N/A"
    })

    const broadcast = computed (()=>{
        if(props.schedule.broadcast.day){
            return props.schedule.broadcast.day + " "+props.schedule.broadcast.time 
        }else return "N/A"
    })

  

    

    return { descriptionSnippet,score,broadcast };
  },
};
</script>

<style>
.sched-img {
  object-fit: cover;

  object-position: 50% 20%;
}
.text-color{
   color:#dce1e3;
}
</style>