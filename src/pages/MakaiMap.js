        import { LoggedNavBar } from "../components/LoggedNavBar";
        import "../styles/Logged.css";
        import { useEffect, useState, React, useRef} from "react";
        import { Wrapper, Status } from "@googlemaps/react-wrapper";
        import { API, graphqlOperation } from "aws-amplify";
        import * as subscriptions from '../graphql/subscriptions';
        import hook from "../Context/hook";
        import {listTodos} from '../graphql/queries';
        const MakaiMap = () => {
            // s9: response.value.data.onCreateTodo.s9,
            // s10: response.value.data.onCreateTodo.s10
            const {latitude,longitude}= hook();
            const status = {
                "status": ""
            }
            const [sens1, setSens1] = useState(-74.04250725972547)
            const [sens2, setSens2] = useState(4.68360892669428)
            useEffect(() => {
                const subscriber = API.graphql(graphqlOperation(subscriptions.onCreateTodo, {status : status})).subscribe({
                    next: (response) => {
                        console.log(response.value)
                        console.log("se recibieron datos")
                        setSens2(response.value.data.onCreateTodo.s3) //lat
                        setSens1(response.value.data.onCreateTodo.s4) //lon
                    },
                    error: (error) => {
                      console.log('error on sensor subscription', error);
                    }
                });
                return () => {
                    console.log('terminating subscription to sensor');
                    subscriber.unsubscribe();
                }
            }, []);
            const center1 = { lat: 4.68360892669428, lng: -74.04250725972547 };
            const center = { lat: sens2, lng: sens1 };
            const zoom = 16; 
            function MyMapComponent({
                center,
                zoom,
            }) {
                const ref = useRef();
            
                useEffect(() => {
                const map = new window.google.maps.Map(ref.current, {
                    center,
                    zoom,
                });
                const marker =new window.google.maps.Marker({
                    position: center,
                    map: map,
                  });
                });
                
                return <div ref={ref} id="map" />;
            }
            
            const Map = () => {};
            const ref = useRef(null);
            const [map, setMap] = useState();

            useEffect(() => {
            if (ref.current && !map) {
                setMap(new window.google.maps.Map(ref.current, {}));
            }
            }, [ref, map]);
            
            const render = (status) => {
                return <h1>{status}</h1>;
            };

            return (    
                <div className="page">
                <LoggedNavBar />
                <Wrapper apiKey={'AIzaSyDZJ-g6n17oxIbVM4B8a5MwI2664VChozA'} render={render}>
                    <MyMapComponent center={center} zoom={zoom} />
                </Wrapper>
                My Makai Map
                <></>
                </div>
            );
        };

        export default MakaiMap;
