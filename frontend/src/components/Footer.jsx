import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return ( 

        <FooterContainer>
            <FooterContent>
                <InnerFooterContainer>
                    <Contact>
                        <h3>Contact Us</h3> {/* This is the header */}
                        <ContactList>
                            <ContactListItems>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="locate location map pin" id="locate_location_map_pin"><path d="M23.78,6.15A11,11,0,0,0,8.22,21.71l4.1,4.1a1,1,0,1,0,1.42-1.42l-4.1-4.1a9,9,0,1,1,12.72,0l-7.07,7.07a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7.07-7.07A11,11,0,0,0,23.78,6.15Z"/><path d="M21,14a5,5,0,1,0-5,5A5,5,0,0,0,21,14Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,14Z"/></g></svg>
                                <span>60 O'sullivan Road, Glen Waverley VIC 3150, Australia</span>
                            </ContactListItems>
                            <ContactListItems>
                                <svg enableBackground="new 0 0 48 48" height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M44,40H4c-2.206,0-4-1.794-4-4V12c0-2.206,1.794-4,4-4h40c2.206,0,4,1.794,4,4v24C48,38.206,46.206,40,44,40z M4,10     c-1.103,0-2,0.897-2,2v24c0,1.103,0.897,2,2,2h40c1.103,0,2-0.897,2-2V12c0-1.103-0.897-2-2-2H4z"/></g><g><path d="M24,29.191L6.457,17.84c-0.464-0.301-0.597-0.919-0.297-1.383s0.919-0.596,1.383-0.297L24,26.809L40.457,16.16     c0.464-0.299,1.083-0.167,1.383,0.297s0.167,1.082-0.297,1.383L24,29.191z"/></g><g><path d="M6.001,34c-0.323,0-0.641-0.156-0.833-0.445c-0.307-0.46-0.183-1.08,0.277-1.387l9-6c0.46-0.307,1.081-0.183,1.387,0.277     c0.307,0.46,0.183,1.08-0.277,1.387l-9,6C6.384,33.945,6.191,34,6.001,34z"/></g><g><path d="M41.999,34c-0.19,0-0.383-0.055-0.554-0.168l-9-6c-0.46-0.307-0.584-0.927-0.277-1.387     c0.306-0.46,0.926-0.584,1.387-0.277l9,6c0.46,0.307,0.584,0.927,0.277,1.387C42.64,33.844,42.322,34,41.999,34z"/></g></g></g></svg>
                                <a href="mailto:gwcharcoalchicken@gmail.com">gwcharcoalchicken@gmail.com</a>
                            </ContactListItems>
                            <ContactListItems>
                                <svg fill="none" height="24" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>                            
                                <a href="tel:0398878431">(03) 9887 8431</a>
                            </ContactListItems>
                        </ContactList>
                    </Contact>
                    <OpeningHours>
                        <h3>Opening Hours</h3>
                        <OpeningHourItem>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>{`.cls-1{fill:#101820;}`}</style></defs><title/><g data-name="Layer 15" id="Layer_15"><path className="cls-1" d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"/><path className="cls-1" d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z"/></g></svg>                        
                            <span>Monday - Sunday: 11:00 AM - 9:00 PM</span>
                        </OpeningHourItem>
                        <p>Public Holiday Hours May Vary</p>
                    </OpeningHours>
                    <ExtraInfo>
                        <h3>Order Online</h3>
                        {/* Add online order link or info */}
                    </ExtraInfo>
                </InnerFooterContainer>
                <Copyright>
                    Copyright © 2025 Glen Waverley Charcoal Chicken - All Rights Reserved.
                </Copyright>
            </FooterContent>
        </FooterContainer>
    );
};

// Footer Container
const FooterContainer = styled.footer`
    width: 100%;
    position: relative; /* Ensure it's not fixed or absolute */

    overflow: hidden;
    padding: 2rem;
    background-color: #F3F8E5;
    color: #333;
`;



// Inner Footer Layout
const InnerFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%
    flex-wrap: wrap;

    
`;

const FooterContent = styled.div`
    max-width: 2000px; /* Restricts content width */
    margin: 0 auto; /* Centers content */
`;
// Contact Section
const Contact = styled.div`
    flex: 1;
    h3 {
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;

// Contact List
const ContactList = styled.ul`
    list-style: none;
    padding: 0;
`;

// Contact List Items
const ContactListItems = styled.li`
    display: flex;
    margin-bottom: 0.8rem;

    svg {
        margin-right: 0.5rem;
        width: 25px;
        height: 25px;
    }

    a {
        color: #7fbc42;
        text-align: left;
        text-decoration: none;
    }
    
    span {
        text-align: left;
    }
`;

// Opening Hours Section
const OpeningHours = styled.div`
    flex: 1;
    h3 {
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
    p {
        text-align: left;
        color: rgb(16 24 32 / 0.7);
        font-size: 0.875rem;
    }

`;

const OpeningHourItem = styled.div`
    display: flex;
    margin-bottom: 0.8rem;

    svg {
        margin-right: 0.5rem;
        width: 20px;
        height: 20px;
    }
`;

// Extra Info Section
const ExtraInfo = styled.div`
    flex: 1;

`;

// Copyright Section
const Copyright = styled.div`
    color: rgb(16 24 32 / 0.7);
    font-size: 0.875rem;
    line-height: 5.25rem;
    text-align: center;
`;

export default Footer;
