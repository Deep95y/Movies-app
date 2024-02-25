import {useEffect, useState} from "react";
import Newsdetail from './newsdetail';
import { useNavigate } from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    const handleBrowse = () => {
        navigate("/showcase");
    }
    useEffect(() => {
        fetchNews();
    }, []);

    async function fetchNews() {
        const newsResult = await Newsdetail(); 
        console.log(newsResult);

        const filteredNews = newsResult?.articles[2];
        // console.log(filteredNews)
        setNews(filteredNews);  
    }
    
    return (
        <> 
        {console.log(news)};
         <div className="everest">
            <div className="everest-pic"><img src = {news.urlToImage}/>
             
            </div>
            <div className="everest-pic"><img src = {news.title}/></div>
            <div className="everest-text"> {news.description}</div>
            


        
        </div>
        <button type = "button" className="browse-button" onClick = {handleBrowse}>Browse</button> 
        
        </>
    ); 
};

export default News;

