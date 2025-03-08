// Carousel.jsx
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Ensure this line is included

import Img1 from '../assets/img/charcoal.png';
import Img2 from '../assets/img/family_treat.png';
import Img3 from '../assets/img/greek_pack.png';

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Img1} className="d-block w-100" alt="Image 1"/>
            </div>
            <div className="carousel-item">
                <img src={Img2} className="d-block w-100" alt="Image 2"/>
            </div>
            <div className="carousel-item">
                <img src={Img3} className="d-block w-100" alt="Image 3"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    );
}

export default Carousel;
