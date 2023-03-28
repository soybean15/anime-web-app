<template>

  <RecommendationView/>
  <PopularView/>
</template>

<script>

import RecommendationView from '../views/components/homepage-components/RecommendationView.vue'
import PopularView from '../views/components/homepage-components/popular/PopularView.vue'
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {RecommendationView,PopularView},

};
</script>

<style>

</style>
