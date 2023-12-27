import { useEffect, useState } from "react";
import './ListOfMovies.css'
import { NavLink } from "react-router-dom";

function ListOfMovies() {

    const [movies, setMovies] = useState([])

    function fetchMovies() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=58017381197e3a68d2071121b1ad908c')
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    console.log(movies)

    return (
        <div className="movieContainer">
            {movies.map((movie) => (
                <NavLink to={movie.id.toString()} key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </NavLink>
            ))}
        </div>
    )
}
export default ListOfMovies;
