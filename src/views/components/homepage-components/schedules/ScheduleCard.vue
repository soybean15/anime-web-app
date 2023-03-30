<template>

    <div class="flex h-40 m-3 border-solid  border border-gray-700  bg-slate-800 bg-zinc-800 rounded-lg">
        <img class="rounded-l-lg sched-img w-2/5  "  :src=" schedule.images.jpg.image_url">
     
        <div class="w-9/12 ">
            <div class="text-left p-1.5">{{schedule.title}}</div>
            <div class="text-left p-1.5">{{ schedule.broadcast.day}} : {{ schedule.broadcast.time }} </div>
            <div class="text-left p-1.5">{{ schedule.type}} </div>
            <div class="text-left p-1.5">{{ schedule.synopsis}} </div>

        </div>


    </div>
  
</template>

<script>
export default {

    props: ['schedule']
}
</script>

<style>
.sched-img{
    object-fit: cover;


   object-position:50% 20%;
}
</style>