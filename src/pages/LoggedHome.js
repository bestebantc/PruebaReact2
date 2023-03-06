import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
import { API, graphqlOperation } from "aws-amplify";
import { listObjetos } from "../graphql/queries";
import { useEffect, useState } from "react";

const LoggedHome = () => {
    const[objeto, setdeobjeto] = useState([]);

    useEffect(()=>{
      getobjeto();
    }, []);


    const getobjeto = async () => {
        try{

          const objetData = await API.graphql(graphqlOperation(listObjetos));
          const objetcList = objetData.data.listObjetos.items;
          console.log('response', objetcList);
          setdeobjeto(objetcList)
        
        }catch(e){
          console.log('error general:',e);
          console.log(listObjetos)
        }
      }

    return(
        <div className="page">
            <LoggedNavBar/>
            <div className="loggedContainer">
                <div className="loggedContainer2">
                    <div className="title">Bienvenido!</div>
                    <div className="loggedContent" onClick={getobjeto}>
                        PayLoadRecibida:
                        {objeto.map(objetoa => {
                          const payload = atob(objetoa.payload_raw);
                          return <div> {payload}</div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoggedHome;