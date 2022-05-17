import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 200px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 32px 40px;

    margin: 0 auto;

    background-color: #FFF;

    h3 {
        font-family: "Abel", sans-serif;
    }

    p {
        font-family: "Source Code Pro", monospace;
    }
`;

const Logo = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {        
        font-size: 32px;
        font-weight: 400;
        line-height: 34px;
        color: #111;

        margin: 0 0 32px;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        color: #111;

        margin: 16px 0 0;
    }
`;

const CurrentAddress = styled.p`
    width: 25%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #111;
`;

const ContactInfo = styled.p`
    width: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
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

            padding-left: 15px;
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