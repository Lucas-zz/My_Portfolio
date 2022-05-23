import { Link } from "react-router-dom";
import { Container, Logo, Menu, MenuContainer, MobileMenu, ToggleMenu } from "./style";
import { LinkedIn, GitHub } from '@mui/icons-material';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <Container>
            <Logo title="Lucas Azzolini Vieira">
                <Link to="/">L.A.V.</Link>
            </Logo>
            <MenuContainer>
                <Menu>
                    <nav>
                        <Link to="/about-me">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <div>
                            <a href="https://www.linkedin.com/in/azzolinilucas/" title="LinkedIn">
                                <LinkedIn sx={{ fontSize: 28, color: "#111" }} />
                            </a>
                            <a href="https://github.com/Lucas-zz" title="GitHub">
                                <GitHub sx={{ fontSize: 28, color: "#111" }} />
                            </a>
                        </div>
                    </nav>
                </Menu>
            </MenuContainer>
            {toggleMenu
                ?
                <MobileMenu>
                    <Link to="/about-me" onClick={() => setToggleMenu(false)}>About Me</Link>
                    <Link to="/projects" onClick={() => setToggleMenu(false)}>Projects</Link>
                    <Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link>
                    <ToggleMenu>
                        <FaTimes onClick={() => setToggleMenu(false)} />
                    </ToggleMenu>
                </MobileMenu>
                :
                <ToggleMenu>
                    <FaBars onClick={() => setToggleMenu(true)} />
                </ToggleMenu>
            }
        </Container>
    );
}