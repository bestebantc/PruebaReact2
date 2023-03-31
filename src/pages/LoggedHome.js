import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState, React } from "react";
import * as subscriptions from '../graphql/subscriptions';
import {listTodos} from '../graphql/queries';
import GaugeChart from 'react-gauge-chart'
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import ReactDOM from 'react-dom';
import LiquidFillGauge from 'react-liquid-gauge';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
  
  const radius = 200;
  const interpolate = interpolateRgb('#6495ed','#dc143c');
  const fillColor = interpolate(50 / 100);
  const gradientStops = [
      {
          key: '0%',
          stopColor: color(fillColor).darker(0.5).toString(),
          stopOpacity: 1,
          offset: '0%'
      },
      {
          key: '50%',
          stopColor: fillColor,
          stopOpacity: 0.75,
          offset: '50%'
      },
      {
          key: '100%',
          stopColor: color(fillColor).brighter(0.5).toString(),
          stopOpacity: 0.5,
          offset: '100%'
      }
  ];
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
                    
                    <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={radius * 2}
                    height={radius * 2}
                    value={50}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };
 
                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                />

                    </div>
                    <div className="loggedContent" >
                    <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="filled" severity="error">
                      This is an error alert — check it out!
                    </Alert>
                    <Alert variant="filled" severity="warning">
                      This is a warning alert — check it out!
                    </Alert>
                    <Alert variant="filled" severity="info">
                      This is an info alert — check it out!
                    </Alert>
                    <Alert variant="filled" severity="success">
                      This is a success alert — check it out!
                    </Alert>
                  </Stack>
                    </div>
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