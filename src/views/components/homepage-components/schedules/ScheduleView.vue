<template>
  <div class="title">Schedules</div>
  <div class="grid grid-cols-1 md:grid-cols-2">

    <div v-for="schedule in schedules" :key="schedule.mal_id">
       {{ schedule.title }} 
    </div>




  </div>
</template>

<script>
import {ref} from 'vue'
import getSchedules from '../../../../data/jikan-api/getSchedules'
export default {

    setup(){
        const schedules = ref(getSchedules())
        console.log(schedules)

        return {
            schedules
        }
    }


}
</script>

<style>

</style>