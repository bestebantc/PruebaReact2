import { NavBar } from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import '../styles/Login.css';

const SignUp = () => {
    let navigate = useNavigate();
    const [name1, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword] = useState("");

    const validateForm = () => {
        return name1.length > 0 && email.length > 0 && password1.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('EVENT!!',event)
        console.log(name1,email,password1);
        signUp();
    }

    const signUp = async () => {
        const username = email;
        const password = password1;
        const name = name1;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    name
                },
            });
            console.log(user);
            console.log('crea el usuario');
            navigate('/codev',{
                state: { username: email, }
            });
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return(
        <div className="loginPage">
            <NavBar/>
            <div className="loginContainer">
                <div className="loginDisplay">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                            <Form.Label className="loginLabel">Email</Form.Label>
                            <br/>
                            <Form.Control
                                className="loginInput"
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group size="lg" controlId="name">
                            <Form.Label className="loginLabel">Name</Form.Label>
                            <br/>
                            <Form.Control
                                className="loginInput"
                                autoFocus
                                type="name"
                                value={name1}
                                onChange={(e) => setName(e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label className="loginLabel">Password</Form.Label>
                            <br/>
                            <Form.Control
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
                                className="loginInput"
                                type="password"
                                value={password1}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Text id="passwordHelpBlock" muted style={{color: 'white'}}>
                            La contraseña debe ser de al menos 8 caracteres. Debe incluir un caracter especial, números y una mayúscula.
                        </Form.Text>
                        <div className="loginButtons">
                            <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                                verificar código
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;