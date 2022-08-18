import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        
        if (keyword.length === 0) {
            swAlert(<h5>Tienes que escribir una palabra clave</h5>)
        } else if (keyword.length < 4) {
            swAlert(<h5>Tienes que escribir más de 4 letras</h5>)
        } else {
            e.currentTarget.keyword.value ='';
            navigate(`/resultados?keyword=${keyword}`);
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <label>
                <input type="text" name="keyword" placeholder="Ingresa una palabra..." />
            </label>
            <button type="submit">Buscar</button>
        </form>
    )
}

export default Buscador;