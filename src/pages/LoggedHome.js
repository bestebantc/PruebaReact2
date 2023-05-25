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
import  {Parser} from '@json2csv/plainjs';
import { unwind } from '@json2csv/transforms';
import { Bullet } from '@ant-design/plots';
import hook from "../Context/hook";
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
  const {loadLatitude,loadLongitude}= hook();

  const datosprueba = [
    { "carModel": "Audi", "price": 0, "colors": ["blue","green","yellow"] },
    { "carModel": "BMW", "price": 15000, "colors": ["red","blue"] },
    { "carModel": "Mercedes", "price": 20000, "colors": "yellow" },
    { "carModel": "Porsche", "price": 30000, "colors": ["green","teal","aqua"] },
    { "carModel": "Tesla", "price": 50000, "colors": []}
  ];





  const [data, setData] = useState([])
  const [number, setNumber] = useState(undefined)
  const [number2, setNumber2] = useState(undefined)
  const [sensor2, setSensor2] = useState(0.0)
  const [number3, setNumber3] = useState(undefined)
  const [sensor3, setSensor3] = useState(0)
  const [number4, setNumber4] = useState(undefined)
  const [sensor1, setSensor1] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ])
  const [sensor4, setSensor4] = useState([
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
  const sensor1rasp = [
    {
      name: "-",
      Distancia: sensor1[0],
      pv: sensor1[1],
      amt: 2400
    },
    {
      name: "-",
      Distancia: sensor1[1],
      pv: sensor1[1],
      amt: 2210
    },
    {
      name: "-",
      Distancia: sensor1[2],
      pv: sensor1[1],
      amt: 2290
    },
    {
      name: "-",
      Distancia: sensor1[3],
      pv: sensor1[1],
      amt: 2000
    },
    {
      name: "-",
      Distancia: sensor1[4],
      pv: sensor1[1],
      amt: 2181
    },
    {
      name: "-",
      Distancia: sensor1[5],
      pv: sensor1[1],
      amt: 2500
    },
    {
      name: "-",
      Distancia: sensor1[6],
      pv: sensor1[1],
      amt: 2100
    }
  ]
  const sensor2rasp = [
    {
      name: "-",
      Distancia: sensor4[0],
      pv: sensor4[1],
      amt: 2400
    },
    {
      name: "-",
      Distancia: sensor4[1],
      pv: sensor4[1],
      amt: 2210
    },
    {
      name: "-",
      Distancia: sensor4[2],
      pv: sensor4[1],
      amt: 2290
    },
    {
      name: "-",
      Distancia: sensor4[3],
      pv: sensor4[1],
      amt: 2000
    },
    {
      name: "-",
      Distancia: sensor4[4],
      pv: sensor4[1],
      amt: 2181
    },
    {
      name: "-",
      Distancia: sensor4[5],
      pv: sensor4[1],
      amt: 2500
    },
    {
      name: "-",
      Distancia: sensor4[6],
      pv: sensor4[1],
      amt: 2100
    }
  ];    
    // useEffect(()=>{
    //   DescargarCSV();
    // },[])
    const DescargarCSV = async () => {
        try{
            const response = await API.graphql(graphqlOperation(listTodos));
            const todoList = response.data.listTodos.items;
            console.log('list data:', todoList)
            handleDownloadCsv(response.data.listTodos.items)
        }catch(e){
            console.log('error:',e)
    }}
    const handleDownloadCsv = (data) => {
      const parser = new Parser({ delimiter: ';' });
      const csvData =  parser.parse(data);
      const element = document.createElement("a");
      element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
      element.setAttribute("download", "DatosDescargados.csv");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
    useEffect(() => {
        const subscriber = API.graphql(graphqlOperation(subscriptions.onCreateTodo, {status : status})).subscribe({
            next: (response) => {

              console.log("se recibieron datos")
              console.log(response.value.data.onCreateTodo)
                  loadLatitude(response.value.data.onCreateTodo.s9)
                  loadLongitude(response.value.data.onCreateTodo.s10)
                  setSensor2(response.value.data.onCreateTodo.s6  /100) //VELOCIDAD 0-100 s1
                  setSensor3(response.value.data.onCreateTodo.s5) //PORCENTAJE BATERIA
                  setSensor1((prevState) => {
                    const newArray = Array.from(prevState);  // dist 1
                    newArray.shift();
                    newArray.push(response.value.data.onCreateTodo.s1);
                    return newArray;  
                  });
                  setSensor4((prevState) => {
                    const newArray = Array.from(prevState);  // dist 1
                    newArray.shift();
                    newArray.push(response.value.data.onCreateTodo.s2);
                    return newArray;  
                  });

                  // s3: response.value.data.onCreateTodo.s3,
                  // s4: response.value.data.onCreateTodo.s4,
                  // s5: response.value.data.onCreateTodo.s5, y asi hasta el 10 XD
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
      <Alert variant="filled" severity="success">
        ta bien too
      </Alert>
      <div style={{width: '100%'}}>
        <div className="graphsContainer">
          <div className="graphs">
            <Card className="cardStyle">
              <CardContent>
                <GaugeChart id="gauge-chart2" 
                  style={{"width": '100%'}}
                  nrOfLevels={20} 
                  percent={sensor2} 
                  textColor="black"
                  needleColor="gray"
                  formatTextValue={value => value + ' m/s'}
                  animDelay={0}
                  arcsLength={[0.4, 0.45, 0.15]}
                  colors={['#5BE12C', '#F5CD19', '#EA4228']}
                  arcPadding={0.01}
                />
              </CardContent>
              <CardActions>
                <div style={{width: "100%", display: "flex", justifyContent:'center'}}>
                  <a> Velocidad</a>
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
                  <a> Voltaje</a>
                  {/* <input placeholder="set number (0-100)" type="text" onChange={(e)=>{setNumber3(e.target.value)}}/> */}
                  {/* <button onClick={changeSensor3Value}>button sensor3</button> */}
                </div>
              </CardActions>
              
            </Card>
          </div>    
          <div className="graphs">
            <Card className="cardStyle">
              <CardContent>
                <LineChart
                    width={500}
                    height={300}
                    data={sensor1rasp}
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
                    <Line type="monotone" dataKey="Distancia 1" stroke="#82ca9d" />
                  </LineChart>
              </CardContent>
              <CardActions>
                <div style={{width: "100%", display: "flex", justifyContent:'center'}}>
                  <a> Distancia a Basura (m)</a>
                  {/* <input placeholder="set number" type="text" pattern="[0-9]*" onChange={(e)=>{setNumber(e.target.value)}}/> */}
                  {/* <button onClick={changeSensor1Value}>button sensor1</button> */}
                </div>
              </CardActions>
            </Card>
          </div>
          <div className="graphs">
            <Card className="cardStyle">
              <CardContent>
                <LineChart
                    width={500}
                    height={300}
                    data={sensor2rasp}
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
                    <Line type="monotone" dataKey="Distancia 2" stroke="#82ca9d" />
                  </LineChart>
              </CardContent>
              <CardActions>
                <div style={{width: "100%", display: "flex", justifyContent:'center'}}>
                  <a> Potencia (W)</a>
                  {/* <input placeholder="set number" type="text" pattern="[0-9]*" onChange={(e)=>{setNumber(e.target.value)}}/> */}
                  {/* <button onClick={changeSensor1Value}>button sensor1</button> */}
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="loggedContent" >
          <button onClick={DescargarCSV}>Download CSV</button>
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

      // <div className="loggedContent" >
      //     PayLoadRecibida:
      //     {data.map(function(item, i){
      //     return <li key={i}>{item.distance} {item.status}</li>
      //     })}
          
      //     {data.map(objetoa => {
      //     //    return <li key={i}>Test</li>
      //     //   const payload = atob(objetoa.payload_raw);
      //     //   const date = new Date(objetoa.time * 1); // Multiplica por 1000 para obtener la fecha en milisegundos
      //     //   const formattedDate = date.toLocaleString()
      //       return <div key={}> {objetoa.distance} {objetoa.status}</div>
      //     })}
      // </div> */}
      </div>
    </div>
  )
}

export default LoggedHome;