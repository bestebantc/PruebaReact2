import React from "react";
import './styles.css';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <div className="navContainer">
            <div className="navTitle">
                <NavLink to={'/'} style={{color: 'white', textDecoration: 'none', fontSize: 58, fontFamily: 'fantasy'}}>MAKAI RANGER</NavLink>
                <NavLink to={'/'} style={{color: 'white', textDecoration: 'none', paddingLeft: '2%'}}>
                    <img src={require('../../assets/images/logo.png')}/>
                </NavLink>
            </div>
            <div className="navOptions">
                <NavLink to={'/team'} style={{color: 'white', textDecoration: 'none', fontSize: 30, fontFamily: 'fantasy'}}>Nuestro Equipo</NavLink>
                <NavLink to={'/gallery'} style={{color: 'white', textDecoration: 'none', fontSize: 30, fontFamily: 'fantasy'}}>Galería</NavLink>
                <NavLink to={'/login'} style={{color: 'white', textDecoration: 'none', fontSize: 30, fontFamily: 'fantasy'}}>Login</NavLink>
            </div>
        </div>
    )
}