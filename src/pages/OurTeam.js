
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../styles/OurTeam.css';

const OurTeam = () => {
    return (
        <div className="page">
            <NavBar />
            <div className="teamContainer">
                <div className="teamContainer2">
                    <div className="teamHeader">
                        <div >
                            <img src={require('../assets/images/employees.png')} width='50%' alt="" />
                        </div>
                        <div>
                            <div className="title">Nuestro equipo</div>

                            <div className="text" style={{ marginTop: '10px' }}>Nuestro equipo de trabajo dedicado y apasionado está compuesto por expertos en programación y diseñadores creativos. Trabajamos juntos en un ambiente colaborativo y productivo paracombatir la contaminación en las principales fuentes de agua dulce.
                                Conoce más acerca de nuestro equipo de trabajo y sus perfiles individuales</div>
                        </div>
                    </div>
                    <div className="teamContent">
                        <div className="teamMember">
                            <div className="teamIcon"> <img src={require('../assets/images/FotoAlejandra.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Alejandra Alza Beltran</div>
                                <div className="teamText">Soy Alejandra, hago parte del equipo de Control, estoy encargada de la
                                    caracterización y realización del control de alto nivel del barco.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoBryan.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Bryan Esteban Torres Cruz</div>
                                <div className="teamText">¡Hola!, soy Bryan, soy lider en el equipo de Tecnologias de la Informacion,
                                    aqui nos encargamos de llevar a cabo la pagina web, y conectar el barco a la nube
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoDaniela.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Daniela Varon Guerrero</div>
                                <div className="teamText">Hola, me llamo Daniela, hago parte del grupo de electrónica y mi función es que
                                    los códigos de todos los sensores funcionen al cargarlos en la raspberry implementada en el barco.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoFelix.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Felix Andres Muñoz Baquero</div>
                                <div className="teamText">Hola, soy Félix y soy el líder del área de electrónica, estoy encargado de gestionar las tareas
                                    y fechas en nuestra área, el acondicionamiento de los sensores implementados, codificación y ensayos.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoFredy2.png')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Freddy Alexis Herrera</div>
                                <div className="teamText">Hola, mi nombre es freddy Ortiz estudiante de ingeniería mecatrónica de la UMNG desde el año 2019.
                                    Actualmente en el proyecto me desempeño como líder del área de control donde nos encargamos del correcto funcionamiento del comportamiento del barco con respecto al movimiento.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoGabriela.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Gabriela Parada Bastidas</div>
                                <div className="teamText">¡Hola!, soy gabriela, gracias
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoJorge.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Jorge Ramirez</div>
                                <div className="teamText">Soy Jorge, miembro del equipo de electrónica encargado de la consulta,  verificación y
                                    gestión de los códigos necesarios para implementar  los diversos sensores y componentes electrónicos en nuestro proyecto.
                                    Mi función es garantizar que el código sea preciso y adecuado para cada componente utilizado en el proyecto,
                                    con el objetivo de asegurar el correcto funcionamiento del mismo.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoProfe.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Camilo Hernandez Mejia</div>
                                <div className="teamText">¡Hola!, soy el profe
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoJuan.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Juan Camilo Sutachan Trujillo</div>
                                <div className="teamText">Hola soy juan, gracias
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoJulian.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Julián Jimenez Bermudez</div>
                                <div className="teamText">¡Hola!, soy Julian, gracias
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FOTOKevin.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Kevin Vergara Trujillo</div>
                                <div className="teamText">¡Hola!, soy Kevin, hago parte del equipo de mecánica. Me encargo de el diseño del barco y
                                    parcialmente del ensamble del barco.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoValentina.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Laura Valentina Castellanos Rojas</div>
                                <div className="teamText">Hola soy valentina, pertenezco al area de electrónica
                                    y me encargo de realizar los diagramas de conexiones de los componentes electronicos además de la caracterización de algunos sensores
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoMateo2.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Mateo Beltran Sierra</div>
                                <div className="teamText">Buenos días todos, soy Mateo  y formo parte del equipo de diseño del barco. En concreto, me encargo del diseño general de la embarcación, lo que incluye desde la estructura hasta la distribución del espacio y el aspecto estético del barco.
                                    Nuestro objetivo con este proyecto ha sido crear una embarcación que combine funcionalidad, seguridad y estilo, y estoy seguro de que el resultado final cumplirá con todas estas expectativas.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoNicolas.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Nicolás Bolivar Merchan</div>
                                <div className="teamText">Buenas soy Nicolas Bolívar, y para este semestre 2023-1 estoy participando  en el 
                                proyecto makai ranger en el  área de control, en la cual estamos trabajando en que el barco siga de manera 
                                correcta las trayectorias propuestas.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoPaula.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Paula Andresa Dias Pinzon</div>
                                <div className="teamText">Hola, me llamo Paula, y hago parte del área de electrónica, estoy encargada
                                    de definir los componentes electrónicos junto con sus especificaciones y de lograr el correcto funcionamiento del radiocontrol que moverá el barco.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoSamuel.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Samuel Quintero Parra</div>
                                <div className="teamText">Soy Samuel Quintero, un estudiante de Ingeniería Mecatrónica que ha estado cursando la carrera desde el año 2018 en la Universidad Militar Nueva Granada. Actualmente formo parte de un proyecto en el que me desempeño como miembro del equipo de control. Dentro de este equipo, yo y mis compañeros nos encargamos de supervisar el comportamiento de los motores del barco y buscar la mejor manera de controlarlo para que cumpla con su finalidad. Su objetivo principal es lograr que el barco funcione de manera eficiente y sin errores críticos en cuanto a su manejo.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoSebastian.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Sebastian Cartagena</div>
                                <div className="teamText">Saludos, me llamo Sebastian y soy miembro del grupo de Tecnologias de la Informacion responsable de el
                                    Backend y Frontend de la Pagina Web.
                                </div>
                            </div>
                        </div>
                        <div className="teamMember">
                            <div className="teamIcon"><img src={require('../assets/images/FotoSergio.jpg')} alt="" /></div>
                            <div className="teamDescription">
                                <div className="teamTitle">Sergio Andres Cardenas Amaya</div>
                                <div className="teamText">Hola, mi nombre es Sergio y pertenezco al equipo de Tecnologías de la Información
                                    estoy encargado de la conexion de la Pagina Web con la raspberry como modulo IoT.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurTeam;