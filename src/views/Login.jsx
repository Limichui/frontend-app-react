import { useState } from "react";
import { useNavigate } from "react-router-dom"


const loginUser = (credenciales) => {
    return fetch ('http://127.0.0.1:8000/api/v1/auth/login',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credenciales)
    }).then(res => res.json())
}

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    //const [errors, setErrors] = useState()

    const navigate = useNavigate()

    const funIngresar = async () => {
        try{
            console.log("Email: " + email + ", Password: " + password);
            const data = await loginUser({ email: email, password: password});
            if(data.errors){
                alert("Error al Autenticar");
            }else{
                //setErrors(data.errors);
                console.log(data);
                navigate("/");
            }
            
        } catch(error){
            alert ("Error al autenticar");
        }
        
    }
    return (
        <>
            
            <h1>Login</h1>
            <label>Correo</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />
            
            <br />
            <label>Contraseña</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <br />
            <button type="button" onClick={ funIngresar }>Ingresar</button>
        </>
    )
}

export default Login;