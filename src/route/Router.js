import { useEffect, useState, React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CodeVerification from "../pages/CodeVerification";
import ErrorPage from "../pages/ErrorPage";
import Test from "../pages/Test";

import LoggedHome from "../pages/LoggedHome";
import MakaiMap from "../pages/MakaiMap";

import { Auth, Hub } from 'aws-amplify';

const Router = () => {
    const [user,setUser] = useState(undefined);
    const [loading,setLoading] = useState(false);

    const checkUser = async () => {
        setLoading(true)
        try{
            const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
            console.log(authUser)
            //console.log('authUser',authUser.attributes)
            //console.log('authUser',authUser)
            setUser(authUser)
            //console.log('log 1')
        }catch (err){
            //console.log('log 3')
            setUser(undefined);
        }
        console.log('user',user)
        setLoading(false)
    };

    useEffect(()=>{
        //console.log('useEffect1')
        checkUser();
    }, []);

    useEffect(() => {
        const listener = (data) => {
            //console.log('from navigation')
            //console.log(data)
            if(data.payload.event == 'signIn' || data.payload.event == 'signOut'){
                checkUser();
            }
        }
        Hub.listen('auth', listener);
        return () => Hub.remove('auth', listener);
    }, []);


    if (loading == true){
        return(
            <div>Loading papu</div>
        );
    }

    return(
        <BrowserRouter>
            {user ? (
                <Routes>
                    <Route path="/home" element={<LoggedHome/>}/>
                    <Route path="/map" element={<MakaiMap/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            ) : (
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="team" element={<OurTeam/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="codev" element={<CodeVerification/>}/>
                    <Route path="Tesst" element={<Test/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes> 
            )}
        </BrowserRouter>
    )
}

export default Router;