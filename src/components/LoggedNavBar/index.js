import React from "react";
import './styles.css';
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const LoggedNavBar = () => {
    let navigate = useNavigate();
    const logout = () => {
        navigate('/')
        Auth.signOut();
    }

    return(
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        <div className="navContainer">
            <div className="navTitle">
                <NavLink to={'/home'} style={{color: 'white', textDecoration: 'none', fontSize: 58, fontFamily: 'fantasy'}}>MAKAI RANGER</NavLink>
=======
>>>>>>> Stashed changes
        <div className="loggedNavContainer">
            <div className="loggedNavTitle">
                <NavLink to={'/home'} style={{color: 'white', textDecoration: 'none', fontSize: 58, fontFamily: 'fantasy'}}>MAKAI RANGERR</NavLink>
>>>>>>> 82b43c3d12f7c3be07817031fd0a911c1a2e9956
                <NavLink to={'/home'} style={{color: 'white', textDecoration: 'none', paddingLeft: '2%'}}>
                    <img src={require('../../assets/images/logo.png')} alt=""/>
                </NavLink>
            </div>
            <div className="loggedNavOptions">
                <NavLink to={'/map'} style={{color: 'white', textDecoration: 'none', fontSize: 30, fontFamily: 'fantasy', cursor: 'pointer'}}>MAKAI MAP</NavLink>
                <div style={{color: 'white', textDecoration: 'none', fontSize: 30, fontFamily: 'fantasy', cursor: 'pointer'}} onClick={logout}>Logout</div>
            </div>
        </div>
    )
}