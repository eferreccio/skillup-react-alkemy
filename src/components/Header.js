import { Link } from 'react-router-dom';

//components
import Buscador from './Buscador';

function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Alkemy Skill up</Link>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
    </button>*/}
                    <div className="navbar-nav" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listado">Listado</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favoritos">Favoritos</Link>
                            </li>
                            <li className="nav-item">
                                <span className='text-success'>
                                    Películas en favoritos: {props.favorites.length}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <Buscador />
                </div>
            </nav>            
        </header>
        
    )
}

export default Header;