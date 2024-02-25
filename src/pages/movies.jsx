import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const navigate = useNavigate(); 
    const [selectedCategory, setSelectedCategory] = useState([]);
    const handleClick = (category) => {
        if(!selectedCategory.includes(category)) {
        setSelectedCategory((prev)  => [...prev, category]); 
        }
    
        console.log(selectedCategory);
        if(selectedCategory.length >= 2) {
            document.getElementById("warning").style.display = "none";
            
        }
    }

    const handleCross = (category) => {
        setSelectedCategory((prev) => prev.filter( (item) => item !== category)); 
    }


    const handleNext = () => {  
    if(selectedCategory.length < 3) {
            document.getElementById("warning").style.display = "block";
        }
    else{
        window.localStorage.setItem("selectedCategory", JSON.stringify(selectedCategory));
        navigate("/info"); 
    } 
    } 
    return ( 
        <> 
      
        <div className="main-cotainer">
            <div className="left-part">
            <div className="shift"><img src = "Super app.png" className = "superapp" />
            <p>Choose your <br/>entertainment <br/>category</p></div>
            <div className="button-group"> 
            
            {selectedCategory.map( (item) => (
               <button type = "submit" className="button1" key = {item}>{item} <div className="cross" onClick={() => handleCross(item)}>x</div> </button>
            )) 

        }

            </div>
            <div className="warning" id = "warning"><img src = "Vector.png"/> Minimum 3 category required</div>
            </div>


        <div className="right-part"> 
            <div className="container">
        <div className="movies1">
        <div className="action" id = "action" onClick={() => handleClick('action')}> 
        <span className="text">Action</span>
     <img src = "image 2.png" className="image1"/> 
         </div>
         <div className="drama" id = "drama" onClick={() => handleClick('drama')}> 
        <span className="text">Drama</span>
     <img src = "image 3.png" className="image2"/> 
         </div>
         <div className="Romance" id = "romance" onClick={() => handleClick('romance')}>
        <span className="text">Romance</span>
     <img src = "image 4.png" className="image3"/> 
         </div>
        </div>

        <div className="movies2">
        <div className="Thriller" id = "thriller" onClick={() => handleClick('thriller')}>
        <span className="text">Thriller</span>
     <img src = "image 6.png" className="image4"/> 
         </div>
         <div className="Western" id = "western" onClick={() => handleClick('western')}>
        <span className="text">Western</span>
     <img src = "image 7.png" className="image5"/> 
         </div>
         <div className="Horror" id = "horror" onClick={() => handleClick('horror')}>
        <span className="text">Horror</span>
     <img src = "image 8.png" className="image6"/> 
         </div>
        </div>

        <div className="movies3">
        <div className="fantacy" id = "fantacy" onClick={() => handleClick('fantacy')}>
        <span className="text">fantacy</span>
     <img src = "image 9.png" className="image7"/> 
         </div>
         <div className="music" id = "music" onClick={() => handleClick('music')}>
        <span className="text">music</span>
     <img src = "image 10.png" className="image8"/> 
         </div>
         <div className="fiction" id = "fiction" onClick={() => handleClick('fiction')}>
        <span className="text">fiction</span>
     <img src = "image 11.png" className="image9"/> 
         </div>
        </div>
        
        </div>
        <button type = "submit" className="next"  onClick={ handleNext}>Next Page</button> 
        </div>
        </div>
    </>
    );
}  
export default Movies;