import { useLoaderData, useParams } from "react-router-dom"
import './MovieDetail.css'

function MovieDetail() {

    // eslint-disable-next-line no-unused-vars
    useParams()
    const movie = useLoaderData()
    console.log(movie)

    return (
        <div className="MovieDetail">
            <p className="MovieDetailMovieName">Movie name : {movie.original_name}</p>
            <p className="MovieDetailMovieCountry">originCountry : {movie.origin_country}</p>
            <p className="MovieDetailMovieVote">vote Average : {movie.vote_average}</p>
            <p className="MovieDetailMovieOverview">overview : {movie.overview}</p>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function movieDetailLoader({ params }) {
    const { id } = params
    return fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=58017381197e3a68d2071121b1ad908c`).then((res) => res.json())
}


export default MovieDetail





