import { ref } from "vue";
import fetchData from "./getData"

const getPopularManga = ()=>{

    
    const path = "https://api.jikan.moe/v4/top/manga"
    const mangaList = ref([]);

    fetchData(path)
    .then(promise=>{
        mapResponse(promise)
    })
  
    


    const mapResponse = (response) => {
  
        response.data.forEach((res) => {
          
          const manga = {
            mal_id: res.mal_id,
            title: res.title,
            description:'',
            images: {
              image_url: res.images.jpg.image_url,
              small_image_url: res.images.jpg.small_image_url,
              large_image_url: res.images.jpg.large_image_url,
  
            },
            type: res.type,
            episodes: res.episodes,
            year: res.year
          };
          mangaList.value.push(manga);
        });
      };

    
      return mangaList


}

export default getPopularManga