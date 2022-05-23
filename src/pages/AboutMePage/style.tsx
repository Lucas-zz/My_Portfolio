import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 6.6vmax 4vw;

    margin: 8vw auto;

    background-color: #FFF;
`;

const Title = styled.h2`
    font-family: "Abel", sans-serif;

    font-size: calc((2.8 - 1) * 1.2vw + 1rem);
    font-weight: 400;
    letter-spacing: 0em;
    text-transform: none;

    text-align: center;
    white-space: pre-wrap;

    padding-bottom: 6.6vmax;
`;

const Text = styled.p`
    width: 70vw;

    font-family: "Source Code Pro", monospace;

    font-size: calc((1.1 - 1) * 1.2vw + 1rem);
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0em;
    
    text-transform: none;

    white-space: pre-wrap;
    word-wrap: break-word;

    margin: 1rem 0;
    margin-top: 0;
    
    -webkit-font-smoothing: antialiased;
    
    :last-of-type {
        padding-top: 50px;
    }

    @media(max-width: 1024px) {
        width: 80vw;
    }

    @media(max-width: 767px) {
        width: 90vw;
    }    

`;

export {
    Container,
    Title,
    Text
}