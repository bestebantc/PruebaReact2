import { NavBar } from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Auth } from 'aws-amplify'
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
    let navigate = useNavigate();
    const [ loading, setLoading ] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
        //console.log(email,password)
        event.preventDefault();
        loginAuth();
    }

    const loginAuth = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const response = await Auth.signIn(email,password);
            //console.log('SignUp Response:',response)
            //loadId(response.attributes.sub);
        } catch (err){
            console.log('Oops', err.message)
        }
        setLoading(false);
        navigate('/home')
    }

    return(
        <div className="loginPage">
            <NavBar/>
            <div className="loginContainer">
                <div className="loginDisplay">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                        <Form.Label className="loginLabel">Correo</Form.Label>
                        <br/>
                        <Form.Control
                            className="loginInput"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                        <Form.Label className="loginLabel">Contraseña</Form.Label>
                        <br/>
                        <Form.Control
                            className="loginInput"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </Form.Group>
                        <div className="loginButtons">
                            <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                            Iniciar sesión
                            </Button>
                            <Button block="true" size="lg" type="submit">
                                <NavLink to={'/signup'} style={{textDecoration: 'none'}}>Registrarse</NavLink>
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default Login;