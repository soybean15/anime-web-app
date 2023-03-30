<template>
  <div class="title">Schedules</div>
  <div class="grid grid-cols-1 md:grid-cols-2 h-96 h-fit overflow-auto">

    <div v-for="schedule in schedules" :key="schedule.mal_id">
        <ScheduleCard :schedule="schedule"/>
    
    </div>




  </div>
</template>

<script>
import {ref} from 'vue'
import getSchedules from '../../../../data/jikan-api/getSchedules'
import ScheduleCard from './ScheduleCard.vue'
export default {
    components:{ScheduleCard},
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