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
        <div className="navContainer">
            <div className="navTitle">
                <NavLink to={'/home'} style={{color: 'white', textDecoration: 'none', fontSize: 58, fontFamily: 'fantasy'}}> </NavLink>
                <NavLink to={'/home'} style={{color: 'white', textDecoration: 'none', paddingLeft: '2%'}}>
                    <img src={require('../../assets/images/LogoPrueba2.0.png')} alt=""/>
                </NavLink>
            </div>
            <div className="navOptions">
                <div style={{color: 'white', textDecoration: 'none', fontSize: 30, fontFamily: 'fantasy', cursor: 'pointer'}} onClick={logout}>Logout</div>
            </div>
        </div>
    )
}