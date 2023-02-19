
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../styles/OurTeam.css';

const OurTeam = () => {
    return(
        <div className="page"> 
            <NavBar/>
            <div className="teamContainer">
                <div className="teamContainer2">
                    <div className="teamHeader">
                        <div className="teamIcon">
                            Icon
                        </div>
                        <div>
                            <div className="title">Nuestro equipo</div>
                            <div className="text">Estos son los integrantes que llevan a cabo este gran proyecto, con los
                            cuales se va a combatir la contaminación en las principales fuentes de agua dulce.</div>
                        </div>
                    </div>
                    <div className="teamContent">
                        <div className="teamMember">
                            <div className="teamIcon">icon</div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Andrés Vargas Rodríguez</div>
                                <div className="teamText">¡Hola!, soy Juan, estoye en el equipo de electrónica, que desarrolla el apartado
                                    de unión entre la batería y los motores que mueven el barco
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon">icon</div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Andrés Vargas Rodríguez</div>
                                <div className="teamText">¡Hola!, soy Juan, estoye en el equipo de electrónica, que desarrolla el apartado
                                    de unión entre la batería y los motores que mueven el barco
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon">icon</div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Andrés Vargas Rodríguez</div>
                                <div className="teamText">¡Hola!, soy Juan, estoye en el equipo de electrónica, que desarrolla el apartado
                                    de unión entre la batería y los motores que mueven el barco
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon">icon</div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Andrés Vargas Rodríguez</div>
                                <div className="teamText">¡Hola!, soy Juan, estoye en el equipo de electrónica, que desarrolla el apartado
                                    de unión entre la batería y los motores que mueven el barco
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon">icon</div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Andrés Vargas Rodríguez</div>
                                <div className="teamText">¡Hola!, soy Juan, estoye en el equipo de electrónica, que desarrolla el apartado
                                    de unión entre la batería y los motores que mueven el barco
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OurTeam;