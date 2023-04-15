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

        <div className="loggedNavContainer">
            <div className="loggedNavTitle">
                <NavLink to={'/home'} style={{color: 'white', textDecoration: 'none', fontSize: 58, fontFamily: 'fantasy'}}>MAKAI RANGER</NavLink>
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