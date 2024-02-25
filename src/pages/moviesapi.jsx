
import axios from "axios";

const Movieapi = async(title) => { 
    try {

    const reqUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_MOVIES_API_KEY}&s=${title}`
    const response = await axios.get(reqUrl);
    console.log(response.data.Search)
    
    return response.data.Search; 
    } catch (error) {
        console.log(error);
    }
}
export default Movieapi  