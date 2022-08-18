import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

function Login() {

    const navigate = useNavigate();
  
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        console.log(regexEmail.test(email));

        if (email === '' || password === '') {
            swAlert(
                <h5>Los campos nos pueden estar vacíos</h5>
            );
            return;
        }

        if (email !=='' && !regexEmail.test(email)) {
            swAlert(
                <h5>Debes escribir una dirección de correo válida</h5>
            );
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !=='react') {
            swAlert(
                <h5>Credenciales inválidas</h5>
            );
            return;
        }

        axios.post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                swAlert(
                    <h5>Perfecto, ingresaste correctamente</h5>
                );
                const tokenRecibido = res.data.token;
                sessionStorage.setItem('token', tokenRecibido);
                sessionStorage.setItem('nombre', 'nano');
                navigate('/listado');

            })
    }
    
    return(
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electrónico:</span><br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;