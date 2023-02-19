import React from "react";
import './styles.css';

export const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="footerContact">
                <div className="footerTitle">Contactanos</div>
                <div className="footerText">Facebook</div>
                <div className="footerText">Instagram</div>
                <div className="footerText">Twitter</div>
            </div>
            <div className="footerRights">
                <div>Todos los derechos reservados</div>
                <div>MAKAI RANGER</div>
            </div>
        </div>
    )
}