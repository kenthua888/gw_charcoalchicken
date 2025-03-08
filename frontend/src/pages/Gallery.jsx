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
import friedRice from "../assets/img/fried_rice.png";
import lambSouvlaki from "../assets/img/lamb_souvlaki.png";
import wholeChicken from "../assets/img/whole_chicken.png";

const images = [
    { src: halfChicken, name: "Half Chicken" },
    { src: wholeChicken, name: "Whole Chicken" },
    { src: quarterChicken, name: "Quarter Chicken" },
    { src: chickenSchnitzel, name: "Chicken Schnitzel Roll" },
    { src: hsp, name: "Halal Snack Pack" },
    { src: lambSouvlaki, name: "Lamb Souvlaki" },
    { src: chickenRoll, name: "Chicken Roll" },
    { src: greekPack, name: "Greek Pack" },
    { src: greekSalad, name: "Greek Salad" },
    { src: singaporeNoodles, name: "Singapore Noodles" },
    { src: kwayTeow, name: "Kway Teow" },
    { src: friedRice, name: "Special Fried Rice" }
];

const Gallery = () => {
    return (
        <GalleryContainer>
            <h1>Gallery</h1>

            <div className="container">
                <div className="row text-center">
                    {images.map((item, index) => (
                        <div key={index} className="col-4">
                            <ImageWrapper>
                                <img src={item.src} alt={item.name} />
                                <OverlayText>{item.name}</OverlayText> {/* Show dish name instead of generic text */}
                            </ImageWrapper>
                        </div>
                    ))}
                </div>
            </div>
        </GalleryContainer>
    );
};

const GalleryContainer = styled.div`
    margin: 0 auto;

    h1 {
        background-color: #F3F8E5;
        color: #7fbc42;
        padding: 2rem 2rem;
    }

`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 250px;  /* Set a fixed height */

    overflow: hidden; /* Hide any overflow */
    position: relative;
    display: inline-block;
    
    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover; /* Crop the image to fit without distortion */
        border-radius: 10px; /* Optional: Add rounded corners */
    }
`;
const OverlayText = styled.h5`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(53, 52, 52, 0.6); /* Optional: Adds background for readability */
    color: white;
    padding: 5px !important;
    border-radius: 5px;
    margin: 0;
    width: 100%

`;
export default Gallery;