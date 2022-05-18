import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 200px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 32px 40px;

    margin: 0 auto;

    background-color: #EAEDED;

    h3 {
        font-family: "Abel", sans-serif;
    }

    p {
        font-family: "Source Code Pro", monospace;
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
        color: #111;

        margin: 0 0 32px;
    }

    p {
        font-size: calc((.9 - 1) * 1.2vw + 1rem);
        font-weight: 300;
        line-height: 24px;
        color: #111;

        margin: 16px 0 0;
    }
`;

const CurrentAddress = styled.p`
    width: 30%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: calc((1 - 1) * 1.2vw + 1rem);
    font-weight: 300;
    line-height: 24px;
    color: #111;
`;

const ContactInfo = styled.p`
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: calc((1 - 1) * 1.2vw + 1rem);
    font-weight: 300;
    line-height: 24px;
    color: #111;
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
        }
    }
`;

export {
    Container,
    ContactInfo,
    CurrentAddress,
    Logo,
    Socials,
}