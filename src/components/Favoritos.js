import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Favoritos(props) {

    const navigate = useNavigate();


    useEffect(() => {

        const token = sessionStorage.getItem('token');
        if (token === null) {
            navigate('/');
        }


    },[])

    return (
        <>
        <h2>Sección favoritos</h2>
        <div className='row'>
            { !props.favorites.length && <div className='col-12 text-danger'>No tenés nada en favoritos</div>}
            {
                props.favorites.map((oneMovie, idx) => {
                    return (

                    <div className='col-3' key={idx}>
                        <div className="card my-4">
                        <img src={oneMovie.imgURL} className="card-img-top" alt="..."/>
                        <button
                        className="favourite-btn"
                        onClick={props.addOrRemoveFromFvs}
                        data-movie-id={oneMovie.id}
                        >🖤</button>
                        <div className="card-body">
                            <h5 className="card-title">{oneMovie.title.substring(0,30)}</h5>
                            <p className="card-text">{oneMovie.overview.substring(0,100)}</p>
                            {/*<Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>*/}
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

export default Favoritos;