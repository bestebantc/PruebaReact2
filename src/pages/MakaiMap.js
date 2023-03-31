        import { LoggedNavBar } from "../components/LoggedNavBar";
        import "../styles/Logged.css";
        import { useEffect, useState, React, useRef} from "react";
        import { Wrapper, Status } from "@googlemaps/react-wrapper";

        const MakaiMap = () => {
            const center = { lat: -34.397, lng: 150.644 };
            const zoom = 4; 
            function MyMapComponent({
                center,
                zoom,
            }) {
                const ref = useRef();
            
                useEffect(() => {
                new window.google.maps.Map(ref.current, {
                    center,
                    zoom,
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
