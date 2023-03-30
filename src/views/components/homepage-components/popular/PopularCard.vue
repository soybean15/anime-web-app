<template>
        <div class="relative h-full w-full shadow-lg  rounded-2xl scale-100 hover:scale-105 ">
         
          <img
            style="pointer-events: none"
            class=" h-full w-full  popular-image object-cover rounded-2xl   box-shadow"
            :src="item.images.image_url"
            alt="Sunset in the mountains"
          />
        <div class="absolute h-1/4 w-full top-0  right-0 px-4 py-2  rounded-t-2xl bg-gradient-to-b from-zinc-900  to-bg-transparent">
            <div class="absolute text-slate-50  top-1 left-0  p-1.5 text-[10px] md:text-base">{{ item.title }}</div>
            <div class="absolute text-slate-50  top-6 left-0  p-1.5 text-[10px] md:text-base">{{ item.year }}</div>
            
        </div>
        <div class="absolute h-2/6 w-full bottom-0  right-0 px-4 py-2  rounded-b-2xl bg-gradient-to-t from-zinc-900  to-bg-transparent"></div>
        <div class="absolute h-1/6 bottom-0 right-0 px-4 py-2">
                <div class="flex flex-col bottom-0 ">
                <div class=" text-white font-semibold  bottom-1 right-2  text-[14px] sm:text-base text-right"> {{item.type}} </div>
                <div class=" text-white  font-semibold bottom-1 right-2  text-[14px] md:text-base text-right">{{item.details.info_type}}: {{ item.details.info_content }}</div>
              
            </div>
        </div>
        </div>
    
</template>

<script>

export default {
    props:['item'],
    setup(props){

   
    }

}
</script>

<style>

</style>