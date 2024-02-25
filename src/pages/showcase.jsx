import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Movieapi from './moviesapi';


const Showcase = () => {

    const navigate = useNavigate();
    const[movieslist, setMovieslist] = useState({});
    const[movies, setMovies] = useState([]);       

    const handleHome = () => {
        navigate("/");
    }

    useEffect(() => {
        const filteredGenre = JSON.parse(localStorage.getItem("selectedCategory"));     
        filteredGenre.forEach((element) => {
            setMovieslist((prev) => ({
                ...prev, [element]: [],
                
            }));
        
        });
       console.log(movieslist);
         for(let key in movieslist) {``
            fetchMovies(filteredGenre[key]);
         }

        fetchMovies(filteredGenre[0]);
        fetchMovies(filteredGenre[1]);
        fetchMovies(filteredGenre[2]);

    }, []);
         useEffect(() => {
            console.log(movieslist);

         }, [movieslist]); 

        const fetchMovies = async (title) => {
            try {
                const result = await Movieapi(title);
                setMovies(result);
            } catch (error) {
            console.error("Error fetching movie data:", error);
            }
        };

        // function fetchMovies(title) {
        //     const result = Movieapi(title);
        //     console.log(result);
        //     console.log("thiiisss");
        //     const getresult = result.slice(0, 4);
        //     setMovies(getresult);
        // }


        
    return (
        <>
       <div className="dep"><img src = "profilepic.jpg" className="profile" onClick = {handleHome}/></div>
        <div className="myimg">
        <img src = "Super app.png" className = "superapp" />
        <h3>Entertainment according to your choice</h3>
        
        {Object.entries(movieslist).map(([key]) => (
                    <div>
                        <span style={{ color: "white" }}>{key}</span>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                                justifyContent: "center",
                            }}
                        >
                            {movies?.map((movie) => (
                                <div>
                                    <div>
                                        <img
                                            src={movie?.Poster}
                                            style={{
                                                objectFit: "contain",
                                                width: "15vw",
                                                height: "50%",
                                                borderRadius: "12px",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
        </>
    );
}

export default Showcase;