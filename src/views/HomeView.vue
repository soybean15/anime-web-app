<template>

  <RecommendationView/>
  <PopularView/>
  <ScheduleView/>
</template>

<script>

import RecommendationView from '../views/components/homepage-components/recommendation/RecommendationView.vue'
import PopularView from '../views/components/homepage-components/popular/PopularView.vue'
import ScheduleView from '../views/components/homepage-components/schedules/ScheduleView'
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    RecommendationView,
    PopularView,
    ScheduleView
  },

};
</script>

<style>

</style>
