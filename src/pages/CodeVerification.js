import { NavBar } from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import '../styles/Login.css';

const CodeVerification = () => {
    let navigate = useNavigate();
    const { state } = useLocation();
    const [code, setCode] = useState("");

    const validateForm = () => {
        return code.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        codeVerification();
    }

    const codeVerification = async (data) => {
        try{
            await Auth.confirmSignUp(state.username, code);
            navigate('/login');
        } catch (err){
            console.log('Oops',err.message);
        }
    };

    return(
        <div className="loginPage">
            <NavBar/>
            <div className="loginContainer">
                <div className="loginDisplay">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="name">
                            <Form.Label className="loginLabel">Codigo</Form.Label>
                            <br/>
                            <Form.Control
                                className="loginInput"
                                autoFocus
                                type="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                />
                        </Form.Group>
                        <div className="loginButtons">
                            <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                                Iniciar sesión
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default CodeVerification;