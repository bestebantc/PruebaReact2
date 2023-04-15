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
                        <img alt="" src={require('../assets/images/FotoGaleria1.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria1.jpg'), 'Caption 1')} />
                        <img alt="" src={require('../assets/images/FotoGaleria2.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria2.jpg'), 'Caption 2')} />
                        <img alt="" src={require('../assets/images/FotoGaleria3.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria3.jpg'), 'Caption 3')} />
                        <img alt="" src={require('../assets/images/FotoGaleria4.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria4.jpg'), 'Caption 4')} />
                        <img alt="" src={require('../assets/images/FotoGaleria5.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria5.jpg'), 'Caption 5')} />
                        <img alt="" src={require('../assets/images/FotoGaleria6.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria6.jpg'), 'Caption 6')} />
                        <img alt="" src={require('../assets/images/FotoGaleria7.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria7.jpg'), 'Caption 7')} />
                        <img alt="" src={require('../assets/images/FotoGaleria8.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria8.jpg'), 'Caption 8')} />
                        <img alt="" src={require('../assets/images/FotoGaleria9.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria9.jpg'), 'Caption 9')} />
                        <img alt="" src={require('../assets/images/FotoGaleria10.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria10.jpg'), 'Caption 10')} />
                        <img alt="" src={require('../assets/images/FotoGaleria11.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria11.jpg'), 'Caption 11')} />

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