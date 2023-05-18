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
                        <img alt="" src={require('../assets/images/FotoGaleria12.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria12.jpg'), 'Caption 12')} />
                        <img alt="" src={require('../assets/images/FotoGaleria13.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria13.jpg'), 'Caption 13')} />
                        <img alt="" src={require('../assets/images/FotoGaleria14.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria14.jpg'), 'Caption 14')} />
                        <img alt="" src={require('../assets/images/FotoGaleria15.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria15.jpg'), 'Caption 15')} />
                        <img alt="" src={require('../assets/images/FotoGaleria16.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria16.jpg'), 'Caption 16')} />
                        <img alt="" src={require('../assets/images/FotoGaleria17.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria17.jpg'), 'Caption 17')} />
                        <img alt="" src={require('../assets/images/FotoGaleria18.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria18.jpg'), 'Caption 18')} />
                        <img alt="" src={require('../assets/images/FotoGaleria19.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria19.jpg'), 'Caption 19')} />
                        <img alt="" src={require('../assets/images/FotoGaleria20.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria20.jpg'), 'Caption 20')} />
                        <img alt="" src={require('../assets/images/FotoGaleria21.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria21.jpg'), 'Caption 21')} />
                        <img alt="" src={require('../assets/images/FotoGaleria22.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria22.jpg'), 'Caption 22')} />
                        <img alt="" src={require('../assets/images/FotoGaleria23.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria23.jpg'), 'Caption 23')} />
                        <img alt="" src={require('../assets/images/FotoGaleria24.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria24.jpg'), 'Caption 24')} />
                        <img alt="" src={require('../assets/images/FotoGaleria25.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria25.jpg'), 'Caption 25')} />
                        <img alt="" src={require('../assets/images/FotoGaleria26.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria26.jpg'), 'Caption 26')} />
                        <img alt="" src={require('../assets/images/FotoGaleria27.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria27.jpg'), 'Caption 27')} />
                        <img alt="" src={require('../assets/images/FotoGaleria28.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria28.jpg'), 'Caption 28')} />
                        <img alt="" src={require('../assets/images/FotoGaleria29.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria29.jpg'), 'Caption 29')} />
                        <img alt="" src={require('../assets/images/FotoGaleria30.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria30.jpg'), 'Caption 30')} />
                        <img alt="" src={require('../assets/images/FotoGaleria31.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria31.jpg'), 'Caption 31')} />
                        <img alt="" src={require('../assets/images/FotoGaleria32.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria32.jpg'), 'Caption 32')} />
                        <img alt="" src={require('../assets/images/FotoGaleria33.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria33.jpg'), 'Caption 33')} />
                        <img alt="" src={require('../assets/images/FotoGaleria34.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria34.jpg'), 'Caption 34')} />
                        <img alt="" src={require('../assets/images/FotoGaleria35.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria35.jpg'), 'Caption 35')} />
                        <img alt="" src={require('../assets/images/FotoGaleria36.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria36.jpg'), 'Caption 36')} />
                        <img alt="" src={require('../assets/images/FotoGaleria37.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria37.jpg'), 'Caption 37')} />
                        <img alt="" src={require('../assets/images/FotoGaleria38.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria38.jpg'), 'Caption 38')} />
                        <img alt="" src={require('../assets/images/FotoGaleria39.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria39.jpg'), 'Caption 39')} />
                        <img alt="" src={require('../assets/images/FotoGaleria40.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria40.jpg'), 'Caption 40')} />
                        <img alt="" src={require('../assets/images/FotoGaleria41.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria41.jpg'), 'Caption 41')} />
                        <img alt="" src={require('../assets/images/FotoGaleria42.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria42.jpg'), 'Caption 42')} />
                        <img alt="" src={require('../assets/images/FotoGaleria43.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria43.jpg'), 'Caption 43')} />
                        <img alt="" src={require('../assets/images/FotoGaleria44.jpg')} className="galleryImg" onClick={() => handleImageClick(require('../assets/images/FotoGaleria44.jpg'), 'Caption 44')} />

                        


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