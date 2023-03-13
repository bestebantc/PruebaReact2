import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import * as subscriptions from '../graphql/subscriptions';
import {listTodos} from '../graphql/queries';

const LoggedHome = () => {
    const [data, setData] = useState([])

    const status = {
        "status": ""
    }
    
    useEffect(()=>{
        listSensorData();

    },[])
    const listSensorData = async () => {
        try{
            const response = await API.graphql(graphqlOperation(listTodos));
            const todoList = response.data.listTodos.items;
            console.log('list data:', todoList)
            setData(response.data.listTodos.items)
        }catch(e){
            console.log('error:',e)
    }}

    useEffect(() => {

        const subscriber = API.graphql(graphqlOperation(subscriptions.onCreateTodo, {status : status})).subscribe({
            next: (response) => {
                console.log(response.value)
                console.log("se recibieron datos")

                    setData((prevState) => {
                    const newArray = Array.from(prevState);  // CREATING A NEW ARRAY OBJECT
                    newArray.push({
                        distance: response.value.data.onCreateTodo.distance,
                        status: response.value.data.onCreateTodo.status
                    });
                    return newArray;  
                });
              
            },
            error: (error) => {
              console.log('error on sensor subscription', error);
            }
        });
        return () => {
            console.log('terminating subscription to sensor');
            subscriber.unsubscribe();
        }
    console.log("se termina suscripcion")
    }, [data]);

    

    
    return(

        <div className="page">
            <LoggedNavBar/>
            <div className="loggedContainer">
                <div className="loggedContainer2">
                    <div className="title">Bienvenido!</div>
                    <div className="loggedContent" >
                        PayLoadRecibida:
                        {data.map(function(item, i){
                        return <li key={i}>{item.distance} {item.status}</li>
                        })}
                        
                        {/* {data.map(objetoa => {
                        //    return <li key={i}>Test</li>
                        //   const payload = atob(objetoa.payload_raw);
                        //   const date = new Date(objetoa.time * 1); // Multiplica por 1000 para obtener la fecha en milisegundos
                        //   const formattedDate = date.toLocaleString()
                          return <div key={}> {objetoa.distance} {objetoa.status}</div>
                        })} */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoggedHome;