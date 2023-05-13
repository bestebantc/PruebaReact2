import React, {useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../styles/Home.css'
import Spline from "@splinetool/react-spline"
import { ClipLoader } from 'react-spinners';
const Home = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="homeContainer">
            <NavBar/>
            <div className="homeContainer2">
                <div className="home">
                    <div className="spot" style={{marginTop: '20px'}}>
                        <div className="homeHeader">
                                <img src={require('../assets/images/LogoBLUE.png')} width="10%" alt="" />
                            <div className="title">
                                PROYECTO MAKAI RANGER
                            </div>
                        </div>
                        <div className="homeText" style={{textAlign: 'justify'}}>
                            <p>
                                ¿Alguna vez has visto la contaminación que flota en nuestros ríos y océanos? 
                                ¿Te has preguntado cómo podemos limpiar todo eso y mantener nuestro planeta limpio y saludable para las generaciones futuras?
                                ¡Tenemos la respuesta! Conoce a Makai Ranger, el barco pequeño pero poderoso que está cambiando el juego en la limpieza de vías fluviales.
                            </p>    
                            <p>
                                Imagina navegar por los ríos más bellos de Colombia y del mundo, 
                                mientras te aseguras de que estén libres de basura y contaminación. 
                                Eso es exactamente lo que hacemos en Makai Ranger. 
                                Nuestro equipo de expertos ha diseñado un barco que es capaz de recoger todo tipo de residuos flotantes, 
                                desde botellas de plástico hasta restos de comida, y lo hace de manera eficiente y sostenible.
                            </p>
                        </div>
                    </div>

                    <div className="spot" >
                        <img src={require('../assets/images/ImgIzq.png')} width="100%" height="100%" alt=""/>
                    </div>
                    <div className="spot" style={{ height: '450px' }}>
                        {loading && (
                        <div className="spinner">
                            <ClipLoader css={`margin: 0 auto;`} size={150} color={'#123abc'} loading={loading} />
                        </div>
                        )}
                        <Spline scene="https://draft.spline.design/FV5qUeCODJDpVmB1/scene.splinecode" onLoad={() => setLoading(false)} />
                    </div>
                    <div className="spot" >
                        <div className="home2">
                            <div className="title">MAKAI RANGER</div>
                            <img src={require('../assets/images/LogoBLUE.png')} width='20%' alt=""/>
                        </div>
                        <div className="homeText" style={{marginTop: '50px'}}>
                        Con el fin de solucionar la recogida de las basuras, 
                        se optó por un vehículo no tripulado, 
                        lo que ha demostrado ser una solución eficiente y efectiva para mantener nuestras ciudades 
                        y cuerpos de agua más limpios
                        </div>
                    </div>
                    <div className="spot">
                        <div className="title"><img src={require('../assets/images/madera.png')} width='10%' alt=""/></div>
                        <div className="title">Materiales</div>
                        <ul className="homeText">
                            <li>Cascos: MDF y Fibra de Vidrio</li>
                            <li>Anillo: MDFy Aluminio</li>
                            <li>Tornillos: Aluminio</li>
                            <li>Rieles: acero</li>
                            <li>Canasta: Aluminio</li>
                        </ul>
                    </div>
                    <div className="spot">
                        <div className="title"><img src={require('../assets/images/dimensions.png')} width='10%' alt="" center/></div>
                        <div className="title">Dimensiones</div>
                        <ul className="homeText">
                            <li>Alto 85cm  </li>
                            <li>Lagro 150cm</li>
                            <li>Ancho 100cm</li>
                        </ul>
                    </div>
                    <div className="spot homeText"> 
                        Los ríos son la principal fuente de agua dulce del mundo, 
                        y son esenciales para la supervivencia de los ecosistemas y la vida humana.
                        Sin embargo, debido a la contaminación, la deforestación y otros factores,
                        muchos ríos del mundo están en peligro y requieren de una gestión y 
                        conservación adecuadas para garantizar su salud y sostenibilidad a largo plazo.
                    </div>

                    <div className="spot title">
                        Imagen Barco terminado
                    </div>
                    <div className="spot title">
                        Imagen o Video Barco Funcionando
                    </div>
                    <div className="spot homeText">
                        La basura que cae a los ríos es una de las principales causas del deterioro de la biodiversidad acuática en todo el mundo. 
                        Según la FAO, cada año se vierten alrededor de 8 millones de toneladas de plásticos en los océanos, 
                        lo que equivale a la descarga de un camión de basura lleno de plástico cada minuto. Además, 
                        se estima que alrededor del 80% de los residuos plásticos que se encuentran en los océanos provienen de la tierra, 
                        principalmente a través de los ríos.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;