import {ref} from 'vue'
import fetchData from "./getData"

const getAnime= ()=>{   

    const path = "https://api.jikan.moe/v4/anime";

    const animes = ref([])

    fetchData(path)
    .then(response=> animes.value=response.data)

    console.log(animes)
      return animes

}

export default getAnime