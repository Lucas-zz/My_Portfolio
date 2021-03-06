import styled from "styled-components";

const MainContainer = styled.footer`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 32px 40px;

    margin: 0 auto;

    background-color: #EFEFEF;
    
    box-shadow: 2px 2px 5px 3px rgba(57, 63, 72, 0.3);

    h3 {
        font-family: "Abel", sans-serif;
    }

    p {
        font-family: "Source Code Pro", monospace;
    }
    @media(max-width:  767px) {
        flex-direction: column;
        align-items: flex-start;

        padding: 5vw 6vw;

        gap: 10px !important;
    }
`;

const Logo = styled.div`
    width: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {        
        font-size: calc((2.2 - 1) * 1.2vw + 1rem);
        font-weight: 400;
        line-height: 34px;
        
        margin: 0 0 32px;
        
        color: #111;

        transition: 300ms;

        :hover {
            transition: 150ms;
            color: #333;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: calc((.9 - 1) * 1.2vw + 1rem);
        font-weight: 300;
        line-height: 24px;
        color: #111;

        padding-right: 10px;
    }
 
    @media(max-width:  767px) {
        display: none;
    }
`

const CurrentAddress = styled.p`
    width: 30%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: calc((1 - 1) * 1.2vw + 1rem);
    font-weight: 300;
    line-height: 24px;
    color: #111;

    @media(max-width: 1024px) {
        display: none;
    }
    @media(max-width:  767px) {
        width: 100%;
        height: 100%;

        display: contents;

        font-size: calc((0.9 - 1) * 1.2vw + 1rem);

        padding-bottom: 10px;
    }
`;

const ContactInfo = styled.p`
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: calc((0.9 - 1) * 1.2vw + 1rem);
    font-weight: 300;
    line-height: 24px;
    color: #111;

    @media(max-width:  767px) {
        width: 100%;
        justify-content: flex-start;

        word-wrap: break-word;
    }
`;

const Socials = styled.div`
    width: 20%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    nav {
        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        & > a {
            display: flex;
            align-items: center;

            padding-left: .5vw;

            will-change: transform;
            transition: transform 450ms;

            :hover {
                transition: transform 250ms;
                transform: translateX(1.5px) translateY(-1.5px);
            }
            
            & > *{

                transition: 300ms;
                color: #111;

                :hover {
                    transition: 150ms;
                    color: #333;
                }
            }

            :first-child > * {
                :hover {
                    transition: 150ms;
                    color: #0072b1;
                }
            }

            :nth-child(2) > * {
                :hover {
                    transition: 150ms;
                    color: #1DA1F2;
                }
            }
        }
    }

    @media(max-width:  767px) {
        width: 100%;

        padding-top: 32px;
    }
`;

export {
    MainContainer,
    Container,
    ContactInfo,
    CurrentAddress,
    Logo,
    Socials,
}