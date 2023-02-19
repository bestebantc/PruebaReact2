import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../styles/Home.css'

const Home = () => {


    return (
        <div className="homeContainer">
            <NavBar/>
            <div className="homeContainer2">
                <div className="home">
                    <div className="spot">
                        <div>
                            <img src={require('../assets/images/logo2.png')} alt="" />
                        </div>
                        <div className="title">
                            Proyecto MAKAI RANGER
                        </div>
                        <div className="text">
                            Este es un proyecto para recoger basuras en vías fluviales....
                        </div>
                    </div>
                    <div className="spot">
                        <img src={require('../assets/images/halfLeftImg.png')} width="100%" height="100%" alt=""/>
                    </div>
                </div>
                
                <div className="home">
                    <div className="spot">
                        Image
                    </div>
                    <div className="spot">
                        <div className="home2">
                            <div className="title">MAKAI RANGER</div>
                            <img src={require('../assets/images/logo2.png')} width='20%' alt=""/>
                        </div>
                        <div className="text">
                            Con el fin de solucionar la recogida de las basuras se optó por un vehiculo
                            no tripulado...
                        </div>
                    </div>
                </div>

                <div className="home">
                    <div className="spot">
                        <div className="title">Materiales</div>
                        <ul className="text">
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                        </ul>
                    </div>
                    <div className="spot">
                        <div className="title">Dimensiones</div>
                        <ul className="text">
                            <li>Alto 50cm</li>
                            <li>Lagro 150cm</li>
                            <li>Ancho 100cm</li>
                        </ul>
                    </div>
                </div>

                <div className="home">
                    <div className="spot text">
                        Los rios son la principal fuente de agua dulce del mundo...
                    </div>
                    <div className="spot title">
                        Image
                    </div>
                </div>

                <div className="home">
                    <div className="spot title">
                        Image
                    </div>
                    <div className="spot text">
                        La basura que cae a los rios es una de las principales causas del...
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;