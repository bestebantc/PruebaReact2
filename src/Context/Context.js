import react, {useState, useContext, createContext} from "react";

export const AuthContext = createContext({
    latitude: undefined,
    longitude: undefined,
    loadLatitude: ()=>{},
    loadLongitude: ()=>{},
});

export function AuthProvider(props){
    const {children} = props;
    const [latitude, setLatitude] = useState(undefined);
    const [longitude, setLongitude] = useState(undefined);

    const loadLatitude = (data) => {
        setLatitude(data);
    }
    const loadLongitude = (data) => {
        setLongitude(data);
    }

    const valueContext = {
        latitude,
        longitude,
        loadLatitude,
        loadLongitude,
    };

    return(
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}