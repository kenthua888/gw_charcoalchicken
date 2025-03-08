import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <ActionContainer>
            <ButtonContainer>
                <PhoneButton href="tel:0398878431">
                    Call to order now!
                    <br />
                    <h2>(03) 9887 8431</h2>
                </PhoneButton>
                <MenuButton to="/menu">
                    See our delicious offerings
                    <br />
                    <h2>Our Menu</h2>
                </MenuButton>
            </ButtonContainer>
        </ActionContainer>
    )
}

const ActionContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;  // Optional: adds some spacing inside the container
`;
const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
    gap: 1rem;
`

const baseButtonStyles = `
    background-color: #7fbc42;  /* bg-accent */
    color: white;  /* text-white */

    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out;  /* transition-colors */
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    min-width: 600px;
    line-height = 2;
    font-size: 19px;

    &:hover {
        background-color: rgba(127, 188, 66, 0.9);  /* hover:bg-accent/90 */
    }
    
`;

const PhoneButton = styled.a`
    ${baseButtonStyles}

`;

const MenuButton = styled(Link)`
    ${baseButtonStyles}
`;

export default CTA;