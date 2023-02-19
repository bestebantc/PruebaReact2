import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../styles/Gallery.css';
const Gallery = () => {
    return(
        <div className="page">
            <NavBar/>
            <div className="galleryContainer">
                <div className="galleryContainer2">
                    <div className="galleryHeader">
                        <div className="galleryIcon">icon</div>
                        <div className="galleryDescription">
                            <div className="title">Gallery</div>
                            <div className="text">En este apartado se expone cómo se d esarrolla el proyecto, en todas sus etapas
                            y ambitos</div>
                        </div>
                    </div>
                    <div className="galleryContent">
                        <img alt="" src={require('../assets/images/logo.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo2.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo2.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo2.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo2.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo.png')} width="20%" className="galleryImg"/>
                        <img alt="" src={require('../assets/images/logo2.png')} width="20%" className="galleryImg"/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;