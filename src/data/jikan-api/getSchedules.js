import {ref} from 'vue'
import fetchData from "./getData"

const getSchedules= ()=>{   

    const path = "https://api.jikan.moe/v4/schedules";

    const schedules = ref([])

    fetchData(path)
    .then(response=> schedules.value=response.data)

    console.log(schedules)
      return schedules

}

export default getSchedules