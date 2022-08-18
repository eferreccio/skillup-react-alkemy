import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Detalle() {

    const navigate = useNavigate();

    const query = new URLSearchParams(window.location.search);
    const movieID = query.get('movieID');

    const [movie, setMovie] = useState(null);

    

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token === null) {
            navigate('/');
        }
        const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=b4973e78a647f4a30c965e35e296b8ed&language=es-ES`;
        axios.get(endpoint)
        .then(response =>{
            const movieData = response.data
            setMovie(movieData)
        })
        .catch(error => {
            console.log(error);
        })

    }, [movieID]); 

    return(
        <>
            {!movie && <p>Cargando...</p>}
            {movie && 
                <>
                <h2>Título:{movie.title}</h2>
                <div className='row'>
                <div className='col-4'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster"/>
                </div>
                    <div className='col-8'>
                        <h5>Fecha de Estreno: {movie.release_date}</h5>
                        <h5>Reseña</h5>
                        <p>{movie.overview}</p>
                        <h5>Rating: {movie.vote_average}</h5>
                        <h5>Géneros</h5>
                        <ul>
                            { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>) }                       
                        </ul>
                    </div>
                </div>
                </>
            }
        </>
    )
}

export default Detalle;