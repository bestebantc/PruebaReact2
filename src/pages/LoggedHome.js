import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/LoggedHome.css'
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
import { Card, CardContent, CardActions } from "@mui/material";


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
  const [data, setData] = useState([])
  const [number, setNumber] = useState(undefined)
  const [number2, setNumber2] = useState(undefined)
  const [sensor2, setSensor2] = useState(0.0)
  const [number3, setNumber3] = useState(undefined)
  const [sensor3, setSensor3] = useState(0)
  const [sensor1, setSensor1] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ])

  const status = {
      "status": ""
  }
  const radius = 150;
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
      name: "-",
      dist: sensor1[0],
      pv: sensor1[1],
      amt: 2400
    },
    {
      name: "-",
      dist: sensor1[1],
      pv: sensor1[1],
      amt: 2210
    },
    {
      name: "-",
      dist: sensor1[2],
      pv: sensor1[1],
      amt: 2290
    },
    {
      name: "-",
      dist: sensor1[3],
      pv: sensor1[1],
      amt: 2000
    },
    {
      name: "-",
      dist: sensor1[4],
      pv: sensor1[1],
      amt: 2181
    },
    {
      name: "-",
      dist: sensor1[5],
      pv: sensor1[1],
      amt: 2500
    },
    {
      name: "-",
      dist: sensor1[6],
      pv: sensor1[1],
      amt: 2100
    }
  ];    
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
                  setSensor2(response.value.data.onCreateTodo.s1/100) //VELOCIDAD 0-100 s1
                  setSensor3(response.value.data.onCreateTodo.s2) //PORCENTAJE BATERIA
                  setSensor1((prevState) => {
                    const newArray = Array.from(prevState);  // CREATING A NEW ARRAY OBJECT
                    newArray.shift();
                    newArray.push(response.value.data.onCreateTodo.s3);
                    return newArray;  
                  });
                  // s3: response.value.data.onCreateTodo.s3,
                  // s4: response.value.data.onCreateTodo.s4,
                  // s5: response.value.data.onCreateTodo.s5,
                    
                // });
              
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
  const changeSensor1Value = () => {
    setSensor1((prevState) => {
      const newArray = Array.from(prevState);  // CREATING A NEW ARRAY OBJECT
      newArray.shift();
      newArray.push(number);
      return newArray;  
    });
  }
  const changeSensor2Value = () => {
    setSensor2(number2/100);
  }
  const changeSensor3Value = () => {
    setSensor3(number3);
  }
  return(
    <div className="page">
      <LoggedNavBar/>
      <div style={{width: '100%'}}>
        <div className="graphsContainer">
          <div className="graphs">
            <Card className="cardStyle">
              <CardContent>
                <LineChart
                    width={500}
                    height={300}
                    data={datosgraficaprueba}
                    margin={{
                        top: 5,
                        right: 80,
                        left: 0,
                        bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    /> */}
                    <Line type="monotone" dataKey="dist" stroke="#82ca9d" />
                  </LineChart>
              </CardContent>
              <CardActions>
                <div style={{width: "100%", display: "flex", justifyContent:'center'}}>
                  {/* <input placeholder="set number" type="text" pattern="[0-9]*" onChange={(e)=>{setNumber(e.target.value)}}/> */}
                  {/* <button onClick={changeSensor1Value}>button sensor1</button> */}
                </div>
              </CardActions>
            </Card>
          </div>
          <div className="graphs">
            <Card className="cardStyle">
              <CardContent>
                <GaugeChart id="gauge-chart2" 
                  style={{"width": '100%'}}
                  nrOfLevels={20} 
                  percent={sensor2} 
                  textColor="black"
                  needleColor="gray"
                />
              </CardContent>
              <CardActions>
                <div style={{width: "100%", display: "flex", justifyContent:'center'}}>
                  {/* <input placeholder="set number (0-100)" type="text" onChange={(e)=>{setNumber2(e.target.value)}}/> */}
                  {/* <button onClick={changeSensor2Value} style={{textAlign: 'center'}}>button sensor2</button> */}
                </div>
              </CardActions>
            </Card>
          </div>    
          <div className="graphs">
            <Card className="cardStyle">
              <CardContent>
                <LiquidFillGauge
                style={{ margin: '0 auto' }}
                width={radius * 2}
                height={radius * 2}
                value={Number(sensor3)}
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
              </CardContent>
              <CardActions>
                <div style={{width: "100%", display: "flex", justifyContent:'center'}}>
                  {/* <input placeholder="set number (0-100)" type="text" onChange={(e)=>{setNumber3(e.target.value)}}/> */}
                  {/* <button onClick={changeSensor3Value}>button sensor3</button> */}
                </div>
              </CardActions>
            </Card>
          </div>    
        </div>

      {/* <div className="loggedContent" >
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
          
          {data.map(objetoa => {
          //    return <li key={i}>Test</li>
          //   const payload = atob(objetoa.payload_raw);
          //   const date = new Date(objetoa.time * 1); // Multiplica por 1000 para obtener la fecha en milisegundos
          //   const formattedDate = date.toLocaleString()
            return <div key={}> {objetoa.distance} {objetoa.status}</div>
          })}
      </div> */}
      </div>
    </div>
  )
}

export default LoggedHome;