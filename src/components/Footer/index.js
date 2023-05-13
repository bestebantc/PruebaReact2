import React from "react";
import './styles.css';

export const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="footerContact">
                <div className="footerTitle">Contactanos</div>
                <div className="footerText">
                <a href="https://www.instagram.com/makairanger_2023/">Instagram</a>
                </div>
                <div className="footerText">Whastsapp +57 322 2211776</div>
            </div>
            <div className="footerRights">
                <div>Todos los derechos reservados</div>
                <div>MAKAI RANGER</div>
            </div>
        </div>
    )
}