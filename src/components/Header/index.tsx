import { Link } from "react-router-dom";
import { Container, Logo, Menu, MenuContainer } from "./style";
import { LinkedIn, GitHub } from '@mui/icons-material';

export default function Header() {
    return (
        <Container>
            <Logo title="Lucas Azzolini Vieira">
                <Link to="/">L.A.V.</Link>
            </Logo>
            <MenuContainer>
                <Menu>
                    <nav>
                        <Link to="/about-me">Sobre Mim</Link>
                        <Link to="/projects">Projetos</Link>
                        <Link to="/contact">Contato</Link>
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
        </Container>
    );
}