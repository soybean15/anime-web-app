<template>
  <div class="relative  h-40 w-32  max-w-sm rounded-2xl " data-dragscroll>

    
    <img
      style="pointer-events: none;"
      class="h-40 w-32 object-cover rounded-2xl shadow-xl"
      :src="anime.images.image_url"
      alt="Sunset in the mountains"
    />

    <div class="absolute h-16 bottom-0 left-0 right-0 px-4 py-2  rounded-b-2xl bg-gradient-to-t from-gray-800  to-bg-transparent">
      <div class="absolute text-slate-50 text-xs  bottom-1 left-0 right-0 p-1.5">{{ snippet }}</div>
    </div>
  </div>
</template>

<script>
import { dragscroll } from "vue-dragscroll";
import { computed } from "vue";
export default {
  directives: {
    dragscroll,
  },
  props: ["anime"],
  setup(props) {
    const snippet = computed(() => {
      if (props.anime.title.length < 30) {
        return props.anime.title;
      } else return props.anime.title.substring(0, 30) + "...";
    });

    return { snippet };
  },
};
</script>

<style scoped>


</style>