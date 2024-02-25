
import axios from "axios";

const Newsdetail = async() => {
    try {
    const reqUrl = "https://newsapi.org/v2/everything?q=Apple&from=2024-02-05&sortBy=popularity&apiKey=388a941c1e2e402c9e9620c703c0c6b0"
    const response = await axios.get(reqUrl);

    return response.data;
    } catch (error) {
        console.log(error);
    }
}
export default Newsdetail  