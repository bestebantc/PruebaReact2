import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../styles/Gallery.css';
import React, { useState } from 'react';

const Gallery = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [modalCaption, setModalCaption] = useState('');

    const handleImageClick = (src, alt) => {
    setModalImage(src);
    setModalCaption(alt);
    setShowModal(true);
    };

    const handleCloseModal = () => {
    setModalImage(null);
    setModalCaption('');
    setShowModal(false);
    };
    return(
        
        <div className="page">
            <NavBar/>
            <div className="galleryContainer">
                <div className="galleryContainer2">
                    <div className="galleryHeader">
                        <div className="galleryIcon"><img src={require('../assets/images/galeria.png')} width='40%' alt=""/></div>
                        <div className="galleryDescription">
                            <div className="title">Gallery</div>
                            <div className="text">En este apartado se expone cómo se desarrolla el proyecto, en todas sus etapas
                            y ambitos</div>
                        </div>
                    </div>
                    <div className="galleryContent">
                    </div>
                </div>
                <div className="modal" style={{ display: showModal ? "block" : "none" }}>
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <img className="modal-content" src={modalImage} alt={modalCaption} />
                    <div className="caption">{modalCaption}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;