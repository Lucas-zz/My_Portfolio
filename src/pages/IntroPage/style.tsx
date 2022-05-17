import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
`;

const Navigator = styled.section`
    width: 100%;
    height: 85vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(https://blog.imgur.com/wp-content/uploads/2016/05/naa3bIG.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    filter: brightness(0.8) contrast(1.1);

    div {
        width: 80%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        padding: 10vmax 4vw;
        
        margin: 0 auto;

        a {
            font-family: "Abel", sans-serif; 
            font-size: calc((4 - 1) * 1.2vw + 1rem);
            font-weight: 400;
            line-height: 56px;

            padding-left: 17px;
            padding-right: 17px;

            margin: 2vw 0;

            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-thickness: 1.5px;
            text-underline-offset: 1rem;

            text-shadow: .6px .6px #111;

            color: #FFF;

            :hover {
                filter: brightness(1.5);
            }
        }
    }
`;

const QuoteSection = styled.section`
    width: 100%;
    height: 60vh;

    background-color: #253551;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 70%;

        display: flex;
        flex-direction: column;
        justify-content: center;        
        
        padding: 10vmax 4vw;

        margin: 0 auto;

        & > * {
            font-family: "Abel", sans-serif !important;

            font-size: calc((1.8 - 1) * 1.2vw + 1rem);
            
            font-weight: 400;
            line-height: 1.4em;
            letter-spacing: 0;
    
            text-transform: none;
            text-align: center;
        }

        p {
            margin-bottom: 32px;
        }
    }
`;

export {
    Container,
    Navigator,
    QuoteSection
}