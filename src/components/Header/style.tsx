import styled from "styled-components";

const Container = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5vw 4vw;
`;

const Logo = styled.div`
    width: 50%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-family: "Abel", sans-serif;

    font-size: 32px;
    font-weight: 400;
    line-height: 34px;
    color: #111;

    padding: 0;

    cursor: pointer;
`;

const MenuContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    * {
        font-family: "Source Code Pro", monospace;
    }
`;

const Menu = styled.div`
    width: 100%;
    
    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;


        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #111;

        & > a {
            padding: 0 20px;
            
            :hover {
                text-decoration: underline;
            } 
        }
    }

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        padding: 0;

        & > a {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export {
    Container,
    Logo,
    MenuContainer,
    Menu,
}