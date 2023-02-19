import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
const LoggedHome = () => {
    return(
        <div className="page">
            <LoggedNavBar/>
            <div className="loggedContainer">
                <div className="loggedContainer2">
                    <div className="title">Bienvenido!</div>
                    <div className="loggedContent">
                        Cosas que pongamos acá jajaja
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoggedHome;