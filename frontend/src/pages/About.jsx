import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Ensure this line is included
import Carousel from '../components/Carousel';
/* need to include image carousel, include interval swiper, similar to smokey chooks interaction. Need to build  */
/*<ImageTextContainer>
                <CarouselContainer>
                    <Carousel />
                </CarouselContainer>
                <TextContainer>
                    <p>text hi my name is kent</p>
                </TextContainer>
            </ImageTextContainer> */
/* after image carousel, need to include about me description*/

const About = () => {
    return (
        <AboutContainer>
            <h1>About Us</h1>

            <ContentWrapper> {/* New wrapper div to set max-width */}
                <div className="row text-center" style={{ "--bs-gap": "5rem" }}>
                    <div className="col-6"><Carousel /></div>
                    <div className="col-6">
                        For over a decade, we’ve been serving up delicious, mouth-watering charcoal chicken that keeps our customers coming back for more. We take great pride in using only the finest free-range Lilydale chickens, ensuring every bite is fresh, flavourful, and ethically sourced.
                        <br />
                        <br />
                        At our restaurant, it’s all about quality, generosity, and affordability. We believe great food should come with great serving sizes - because nothing beats a hearty, satisfying meal that doesn’t break the bank. 
                        <br />
                        <br />
                        Whether you're grabbing a quick bite or feeding the whole family, we’ve got you covered.
                        <br />
                        <br />
                        From the moment you walk in, you'll be greeted with the rich aroma of charcoal-grilled perfection and a warm, welcoming atmosphere. 
                        <br />
                        <br />
                        Whether you're a regular or visiting for the first time, we’re here to serve up delicious food made with care. So come by, dig in, and taste the difference - real charcoal chicken, done right.
                    </div>
                </div>
            </ContentWrapper>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    margin: 0 auto;
    padding: 0.5rem;
    min-height: calc(100vh - <footer height>); /* Adjust based on footer height */
    
    h1 {
        background-color: #F3F8E5;
        font-size: 500;
        color: #7fbc42;
        padding: 1rem 2rem;
    }
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;  /* Centers the container */
    width: 100%;
`;

export default About;