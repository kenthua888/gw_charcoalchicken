import React from 'react';
import styled from 'styled-components';
import StoreImg from '../assets/img/home.png';


/* need to include review panel for customer testimonial - maybe as a component in folder*/

/* */

const Home = () => {
    return (
        <HomeContainer>
            <ImageContainer>
                <HomeImage src={StoreImg} alt='Store Photo'/>
            </ImageContainer>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

const HomeImage = styled.img`
    height: 800px;
    padding: 0;
    object-fit: contain;  // Maintains aspect ratio
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Home;