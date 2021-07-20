import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './rows.scss';



function Rows({title, fetchUrl, isLargeRow}) {
    const base_url = "https://image.tmdb.org/t/p/original";
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

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="rows_posters">
                {movies.map((movie) => (
                    <img 
                    key={movie.id} 
                    className={`rows_imageposter ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} 
                        alt={movie.name}
                />
                ))}
            </div>
        </div>
    );
}

export default Rows

