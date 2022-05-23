import styled from "styled-components";

const Container = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.3vw 4vw;

    background-color: #EFEFEF;

    position: fixed;
    top: 0;
    z-index: 10;
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
        
        padding: 0;
        
        cursor: pointer;

        color: #111;
        
        :hover {
            color: #333;
        }

        @media(max-width: 767px) {
            font-size: calc((3 - 1) * 1.2vw + 1rem);
        }
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

    @media(max-width: 1024px) {
        display: none;
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

            & > *{
                color: #111;

                :hover {
                    color: #333;
                }
            }

            :first-child > * {
                :hover {
                    transition: 150ms;
                    color: #0072b1;
                }
            }
        }
    }
`;

const MobileMenu = styled.div`
    display: none;

    @media(max-width: 1024px) {

        min-width: 50vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background-color: rgba(238, 238, 238, .95);
        
        position: fixed;
        right: 0;
        top: 0;
        
        z-index: 2;
        
        & > a {
            font-family: "Source Code Pro", monospace;
            font-size: calc((2 - 1) * 1.2vw + 1rem);

            padding: 50px;

            :last-of-type {
                margin-bottom: 50px;
            }
            
            :hover {
                text-decoration: underline;
                text-decoration-thickness: 3px;
                text-underline-offset: 6px;
            }
        }
    }
        
    @media(max-width: 767px) {
        width: 100%;

        & > a {
            font-size: calc((3 - 1) * 1.2vw + 1rem);
        }
    }
`

const ToggleMenu = styled.div`
    display: none;

    @media(max-width: 1024px) {        
        display: flex;
        justify-content: center;
        align-items: center;
        
        font-size: 4vw;
        
        padding: .75rem;
        
        color: #222;
        background-color: #EEE;
        
        cursor: pointer;
        
        position: fixed;
        top: .8vw;
        right: 1%;

        z-index: 99 !important;
    }

    @media(max-width: 767px) {
        font-size: 5vw;
        top: .9vw;
    }
`;

export {
    Container,
    Logo,
    MenuContainer,
    Menu,
    ToggleMenu,
    MobileMenu
}