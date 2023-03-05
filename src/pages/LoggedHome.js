import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
import { API } from "aws-amplify";

const LoggedHome = () => {
    const getitem = async () => {
        const apiName = 'apiprueba2';
        const path = '/api-prueba2';
        const config = {
          headers: {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Credentials": "true",
          },
          body: {'string': "Hola"},
        }
        try{
          const response = await API.post(apiName,path,config)
          console.log(response)
        
        }catch(e){
          console.log('error general:',e)
        }
      }
    return(
        <div className="page">
            <LoggedNavBar/>
            <div className="loggedContainer">
                <div className="loggedContainer2">
                    <div className="title">Bienvenido!</div>
                    <div className="loggedContent" onClick={getitem}>
                    
                        Cosas que pongamos acá jajaja
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoggedHome;