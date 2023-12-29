import { NavLink, useLoaderData } from "react-router-dom";
import './ListOfMovies.css'


function ListOfMovies() {
    const movies = useLoaderData()
    let list = movies.results
    console.log(list)

    return (
        <div className="movieContainer">
            {list.map((movie) => (
                <NavLink to={movie.id.toString()} key={movie.id}>
                    <img className="movieContainerImg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </NavLink>
            ))}
        </div>
    )
}
export default ListOfMovies


// eslint-disable-next-line react-refresh/only-export-components
export function moviesLoader() {
    return fetch('https://api.themoviedb.org/3/discover/tv?api_key=58017381197e3a68d2071121b1ad908c')
        .then((res) => res.json())
}