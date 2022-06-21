import styled from "styled-components";

const Container = styled.main`
    width: 100%;

    background-color: #FFF;

    margin: 8vw auto;
`;

const Grid = styled.section`
    width: 100%;
    min-height: 100%;

    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-evenly;

    padding-top: 2%;

    @media(max-width: 1024px) {
        grid-template-columns: 80%;
    }

    @media(max-width: 767px) {
        grid-template-columns: 100%;
        padding-top: 10%;
    }
`;

const Project = styled.article`
    width: 100%;

    background-color: #EFEFEF;

    border-radius: 10px;
    
    margin: 5% 0;
`;

const Contained = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 30px;

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

const Title = styled.div<any>`
    width: 70%;
    height: 25vh;

    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 60%;
        height: 60%;
        background-repeat: no-repeat;
        background-size: cover;
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
    justify-content: space-evenly !important;
    align-items: center;

    padding-bottom: 30px;
`;

const ContainerButtons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-evenly !important;
    align-items: center;
`;

const MUIStyles = {
    button: {
        pt: "15px",
        pb: "15px",
        pl: "40px",
        pr: "40px",
        backgroundColor: "#253551",
        fontFamily: [
            '"Abel"', 'sans-serif'
        ].join(','),
        fontSize: 16,
        '&:hover': {
            backgroundColor: "#333"
        }
    },
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
    Icons
}