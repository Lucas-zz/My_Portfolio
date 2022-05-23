import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;

    margin-top: 6vw;
`;

const Navigator = styled.section`
    width: 100%;
    height: 86vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("./assets/coffee_background.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    filter: brightness(0.8) contrast(1.1);

    div {
        width: 70%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        padding: 10vmax 4vw;
        
        margin: 0 auto;

        & > a {
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
            text-align: left;

            text-shadow: 1.5px .5px #111;

            color: #FFF;

            will-change: transform;
            transition: transform 450ms;

            :hover {
                transition: transform 125ms;
                transform: translate(10px);
                
                filter: brightness(1.5);
            }

            @media(max-width: 767px){
                font-size: calc((4 - 1) * 2vw + 1rem);

                padding-left: 0;
                padding-right: 0;
            }
        }
    }
`;

const QuoteSection = styled.section`
    width: 100%;
    min-height: 60vh;

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

            @media(max-width: 767px) {
                font-size: calc((2 - 1) * 2vw + 1rem);
            }
        }

        & > p {
            margin: 30px 0;
        }
        & > span {
            margin-bottom: 30px;
        }
    }
`;

export {
    Container,
    Navigator,
    QuoteSection
}