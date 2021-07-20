import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './rows.scss';



function Rows({title, fetchUrl, isLargeRow}) {
    console.log(fetchUrl);
    const baseURL = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[fetchUrl])

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log("Param", urlParams.get("v"))
            })
            .catch((error) => alert("No Available Trailer"));
        }
    }

    const opts ={
        height: "390",
        width: "100%",
        playVars: {
            autoplay: 1,
        },
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rows_posters">
                {movies.map((movie) => (
                    <img 
                    key={movie.id} 
                    className={`rows_imageposter ${isLargeRow && "row_posterLarge"}`}
                    onClick={() => handleClick(movie)}
                    src={`${baseURL}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} 
                        alt={movie.name}
                />
                ))}                
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
                
    );
}

export default Rows;

