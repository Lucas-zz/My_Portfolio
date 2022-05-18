import styled from "styled-components";

const Container = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.3vw 4vw;

    background-color: #EAEDED;
`;

const Logo = styled.div`
    width: 50%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > a {
        font-family: "Abel", sans-serif;

        font-size: calc((2 - 1) * 1.2vw + 1rem);
        font-weight: 400;
        line-height: 34px;
        color: #111;

        padding: 0;

        cursor: pointer;
    }
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


        font-size: calc((1 - 1) * 1.2vw + 1rem);
        font-weight: 300;
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

        padding: 0 10px;

        & > a {
            display: flex;
            justify-content: center;
            align-items: center;

            padding-left: 10px;

            will-change: transform;
            transition: transform 450ms;

            :hover {
                transition: transform 250ms;
                transform: translateX(1px) translateY(-1px);
            }
        }
    }
`;

export {
    Container,
    Logo,
    MenuContainer,
    Menu,
}