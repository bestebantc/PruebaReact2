import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState, React } from "react";
import * as subscriptions from '../graphql/subscriptions';
import {listTodos} from '../graphql/queries';
import GaugeChart from 'react-gauge-chart'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const LoggedHome = () => {
    const datosgraficaprueba = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
    const [data, setData] = useState([])
    ////


    /// 
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

    
    console.log("distancia",data.distance)
    
    return(

        <div className="page">
            <LoggedNavBar/>
            <div className="loggedContainer">
                <div className="loggedContainer2">
                    <div className="title">Bienvenido!</div>
                    <div className="loggedContent" >
                    <LineChart
                    width={500}
                    height={300}
                    data={datosgraficaprueba}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>

                    <GaugeChart id="gauge-chart2" 
                        style={{"width": '30%'}}
                        nrOfLevels={20} 
                        percent={0.495} 
                    />
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