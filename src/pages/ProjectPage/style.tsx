import styled from "styled-components";

const Container = styled.main`
    width: 100%;

    background-color: #FFF;

    margin: 8vw auto;
`;

const Title = styled.h2`
    font-family: "Abel", sans-serif;

    font-size: calc((2.8 - 1) * 1.2vw + 1rem);
    font-weight: 400;
    letter-spacing: 0em;
    
    text-transform: none;
    text-shadow: 2.5px 2.5px 1px rgba(57, 63, 72, 0.3);
    text-align: center;
    
    white-space: pre-wrap;

    padding-top: 100px;
    padding-bottom: 100px;


    @media(max-width: 1024px) {
        font-size: calc((2.8 - 1) * 2vw + 1rem);
        padding-bottom: 80px;
    }

    @media(max-width: 767px) {
        font-size: calc((1.2 - 1) * 20vw + 1rem);
        padding-bottom: 60px;
    }
`;

const Grid = styled.section`
    width: 100%;
    min-height: 100%;

    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-evenly;

    @media(max-width: 1024px) {
        grid-template-columns: 80%;
    }

    @media(max-width: 767px) {
        grid-template-columns: 100%;
    }
`;

const Project = styled.article`
    width: 100%;

    background-color: #EFEFEF;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    
    margin: 5% 0;

    padding: 30px;

    box-shadow: 2px 2px 10px rgba(57, 63, 72, 0.3);

    @media(max-width: 767px) {
        border-radius: 0;
        padding: 0;
    }
`;

const Contained = styled.div`
    width: 80%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 767px) {
        width: 100%;
        padding: 30px 0;
    }

    /* -webkit-filter: grayscale(100%);
    filter: grayscale(100%) blur(2px);
    transition: .3s ease-in-out;
    -webkit-transition:  .3s ease-in-out;

    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;

    :hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0) blur(0);
        -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }

    @media(max-width: 767px) {
        -webkit-filter: grayscale(0);
        filter: grayscale(0) blur(0);
        
        :hover {
            -webkit-filter: grayscale(0);
            filter: grayscale(0) blur(0);
            -webkit-transform: scale(1.1);
	        transform: scale(1.1);
        }   
    } */
`;

const ProjectLogo = styled.div<any>`
    width: 70%;
    height: 25vh;

    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 70%;
        height: 70%;
        background-repeat: no-repeat;
        background-size: cover;

        @media(max-width: 767px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const More = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Abel', sans-serif;
    font-size: calc((2 - 1) * 1.2vw + 1rem);

    text-align: center;
    word-wrap: break-word;

    @media(max-width: 1024px) {
        padding: 100px 0;
    }
`;

const Icons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding-bottom: 60px;
`;

const Icon = styled.div`
    height: 66px;

    display: flex;
    justify-content: space-evenly;

    background-repeat: no-repeat;
    background-size: cover;

    gap: 2%;

    @media(max-width: 767px) {
        height: 55px;
        gap: 10px;
    }
`;

const ContainerButtons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-evenly !important;
    align-items: center;

    gap: 20px;
`;

const MUIStyles = {
    button: {
        pt: "15px",
        pb: "15px",
        pl: "5vw",
        pr: "5vw",
        backgroundColor: "#253551",
        fontFamily: [
            '"Abel"', 'sans-serif'
        ].join(','),
        fontSize: 16,
        '&:hover': {
            backgroundColor: "#333"
        }
    },
    title: {
        marginBottom: "50px",
        fontFamily: [
            '"Abel"', 'sans-serif'
        ].join(','),
    },
    typography: {
        marginTop: "30px",
        textShadow: "1px 1px 1px rgba(57, 63, 72, 0.3)"
    }
};

export {
    Container,
    Grid,
    Project,
    Title,
    Contained,
    More,
    MUIStyles,
    ContainerButtons,
    Icons,
    Icon,
    ProjectLogo
}