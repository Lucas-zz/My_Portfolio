import styled from "styled-components";

const Container = styled.main`
    width: 100vw;

    padding-left: 20vw;
    padding-right: 20vw;

    margin: 8vw auto;

    @media(max-width: 1024px) {
        padding-left: 10vw;
        padding-right: 10vw;        
    }

    @media(max-width: 767px) {
        padding-left: 0;
        padding-right: 0;        
    }
`;

export { Container }