<template>
        <div class="relative h-full w-full shadow-lg ">
          <img
            style="pointer-events: none"
            class="h-full w-full object-center object-cover rounded-2xl "
            :src="anime.images.image_url"
            alt="Sunset in the mountains"
          />
        <div class="absolute h-2/4 w-full top-0  right-0 px-4 py-2  rounded-t-2xl bg-gradient-to-b from-zinc-900  to-bg-transparent">
            <div class="absolute text-slate-50 text-xs  top-1 left-0  p-1.5 text-base">{{ anime.title }}</div>
        </div>
        </div>
</template>

<script>
export default {
    props:['anime'],
    setup(){

    }

}
</script>

<style>

</style>