import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 22vh;

    font-family: "Abel", sans-serif;
`;

const ErrorCode = styled.p`
    
    position: absolute;
    top: -25px;
    left: 2vw;
    
    font-size: 20px;

    background-color: #FFF;

    padding: 2px;
`;

const Error = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;

    border: 2px solid #999;
    border-radius: 10px;

    position: relative;

    img {
        width: calc((21 - 10) * 1vw + 2rem);

        @media(max-width: 767px) {
            width: calc((25) * 1vw + 2rem);
        }
    }
`;

const Four = styled.p`
    font-size: calc((10 - 1) * 1.2vw + 1rem);

        @media(max-width: 767px) {
            font-size: calc((20) * 1.2vw + 1rem);
        }
`;

const ErrorMessage = styled.div`
    width: 100%;

    font-size: calc((2.5 - 1) * 1.1vw + 1rem);

    text-align: center;
    padding: 10vh 10vw;

    & > span {
        padding-bottom: 5vw;
    }

    & > p {
        font-size: calc((2 - 1) * 1vw + 1rem);
        padding-top: 3vw;

        @media(max-width: 767px) {
            font-size: calc((4 - 1) * 1vw + 1rem);

            padding-top: 10vw;
        }
    }

    & > p > a {
        padding-left: 10px;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
    
        :hover {
            color: #999;
        }
    }

    @media(max-width: 767px) {
        font-size: calc((4 - 1) * 1.1vw + 1rem);
    }
`;

export {
    Container,
    ErrorCode,
    Error,
    ErrorMessage,
    Four
}