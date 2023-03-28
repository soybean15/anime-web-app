<template>
  <div class="item-card max-w-sm rounded shadow-lg" data-dragscroll>
    <img
      style="pointer-events: none;"
      class="object-cover h-48 w-96"
      :src="anime.images.image_url"
      alt="Sunset in the mountains"
    />

    <div class="text-sm">{{ snippet }}</div>
  </div>
</template>

<script>
import { dragscroll } from "vue-dragscroll";
import { computed, watch } from "vue";
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

.item-card {
  height: 17em;
  width: 10em;
}
</style>