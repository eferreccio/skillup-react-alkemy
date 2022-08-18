import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

function Resultados() {

    const navigate = useNavigate();

    const query = new URLSearchParams(window.location.search);
    const keyword = query.get('keyword');

    const [ moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token === null) {
            navigate('/');
        }
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=b4973e78a647f4a30c965e35e296b8ed&language=es-Es&query=${keyword}`;
        axios.get(endpoint)
        .then(response =>{
            const moviesArray = response.data.results;

            if (moviesArray.length === 0) {
                swAlert(<h5>Tu búsqueda no arrojó resultados</h5>)
            }
            setMoviesResults(moviesArray)
        })
        .catch(error => {
            console.log(error);
        })

    }, [keyword]); 

    //

    return (
        <>
            <h2>Buscaste: <em>{keyword}</em></h2>
            <div className='row'>
            {
                moviesResults.map((oneMovie, idx) => {
                    return (

                    <div className='col-4' key={idx}>
                        <div className="card my-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{oneMovie.title.substring(0,30)}</h5>
                            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                        </div>
                        </div>
                    </div>

                    )
                })
            }

        </div>
   
        </>
    )
}

export default Resultados;