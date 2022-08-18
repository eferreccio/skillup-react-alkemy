import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';


function Listado(props) {

    const navigate = useNavigate();

    const [ moviesList , setMoviesList ] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token === null) {
            navigate('/');
        }

        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=b4973e78a647f4a30c965e35e296b8ed&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
        axios.get(endpoint)
            .then(response =>{
                const apiData = response.data
                setMoviesList(apiData.results)
            })
            .catch(error => {
                swAlert(
                    <h2>Tuvimos errores, intenta mas tarde</h2>
                )
            })
    }, [setMoviesList]); 

    console.log(moviesList);


    return (
        <div className='row'>
            {
                moviesList.map((oneMovie, idx) => {
                    return (

                    <div className='col-3' key={idx}>
                        <div className="card my-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                        <button
                         className="favourite-btn"
                         onClick={props.addOrRemoveFromFvs}
                         data-movie-id={oneMovie.id}
                         >🖤</button>
                        <div className="card-body">
                            <h5 className="card-title">{oneMovie.title.substring(0,30)}</h5>
                            <p className="card-text">{oneMovie.overview.substring(0,100)}</p>
                            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                        </div>
                        </div>
                    </div>

                    )
                })
            }

        </div>
    )
}

export default Listado;