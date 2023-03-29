import { ref } from "vue";

// const fetchData = (path) => {

//     const animeResponse = ref(null);
//     const error = ref(null);

//     const load = async () => {
//         try {
//             let data = await fetch(
//                 path
//             );
//             if (!data.ok) {
//                 throw Error("no Data available");
//             }

//             animeResponse.value = await data.json();
            

//         } catch (err) {
//             error.value = err.message;
//         }
        
//     };
//     console.log(animeResponse)
//     return {animeResponse,load}
    
// }


const fetchData =async (path) => {
    const error = ref(null);

        try {
            let data = await fetch(
                path
            );
            if (!data.ok) {
                throw Error("no Data available");
            }

            return  await data.json();
            

        } catch (err) {
            error.value = err.message;
        }
        
    
}


export default fetchData

