import { ref } from "vue";
import fetchData from "./getData"

const getRecommendations= ()=>{   
    //const animeList = ref([]);
    const path = "https://api.jikan.moe/v4/recommendations/anime";
    const animeList = ref([])

    fetchData(path)
    .then(function(promise){
        mapResponse(promise)
    })
  


    const mapResponse = (response) => {

     
  
        response.data.forEach((res) => {
          const anime = {
            mal_id: res.mal_id,
            title: res.entry[0].title,
            description: res.content,
            images: {
              image_url: res.entry[0].images.jpg.image_url,
              small_image_url: res.entry[0].images.jpg.small_image_url,
              large_image_url: res.entry[0].images.jpg.large_image_url,
            },

            
          };
       
          animeList.value.push(anime);
        });
      };


      return animeList

}

export default getRecommendations