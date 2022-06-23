import styled from "styled-components";

const Container = styled.main`
    width: 100%;

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


const MUIStyles = {
    container: {
        mt: "80px",
        mb: "80px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    },
    title: {
        marginBottom: "50px",
        fontFamily: [
            '"Abel"', 'sans-serif'
        ].join(','),
    },
    dividerContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        mt: "16px",
        mb: "26px",
    },
    input: {
        marginBottom: "16px",
        '&:placeholder': {
            fontFamily: [
                '"Abel"', 'sans-serif'
            ].join(',')
        }
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    sendButton: {
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

export { Container, MUIStyles }