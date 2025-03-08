import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

import singaporeNoodles from "../assets/img/singapore_noodles.png";
import quarterChicken from "../assets/img/quarter_chicken.png";
import kwayTeow from "../assets/img/kway_teow.png";
import hsp from "../assets/img/hsp.png";
import halfChicken from "../assets/img/half_chicken.png";
import greekPack from "../assets/img/greek_pack.png";
import greekSalad from "../assets/img/greek_salad.png";
import chickenSchnitzel from "../assets/img/chicken_schnitzel_roll.png";
import chickenRoll from "../assets/img/chicken_roll.png";

const images = [
    { src: halfChicken, name: "Half Chicken" },
    { src: quarterChicken, name: "Quarter Chicken" },
    { src: chickenSchnitzel, name: "Chicken Schnitzel Roll" },
    { src: hsp, name: "Halal Snack Pack" },
    { src: chickenRoll, name: "Chicken Roll" },
    { src: greekPack, name: "Greek Pack" },
    { src: greekSalad, name: "Greek Salad" },
    { src: singaporeNoodles, name: "Singapore Noodles" },
    { src: kwayTeow, name: "Kway Teow" }
];

const Gallery = () => {
    return (
        <GalleryContainer>
            <h1>Photo Gallery</h1>
            <p>Check out our mouthwatering dishes...</p>

            <div className="container">
                <div className="row text-center">
                    {images.map((item, index) => (
                        <div key={index} className="col-4">
                            <ImageWrapper>
                                <img src={item.src} alt={item.name} />
                            </ImageWrapper>
                            <p>{item.name}</p> {/* Show dish name instead of generic text */}
                        </div>
                    ))}
                </div>
            </div>
        </GalleryContainer>
    );
};

const GalleryContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;  /* Set a fixed height */
    overflow: hidden; /* Hide any overflow */
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Crop the image to fit without distortion */
        border-radius: 10px; /* Optional: Add rounded corners */
    }
`;

export default Gallery;