import { ContactInfo, Container, CurrentAddress, Logo, Socials } from "./style";
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Container>
            <Logo>
                <Link to="/">
                    <h3 title="Lucas Azzolini Vieira">L.A.V.</h3>
                </Link>
                <p>Made with React</p>
            </Logo>
            <CurrentAddress title="Entre em contato comigo para mais informações">
                Rua Maringá, 105, Blumenau
                <br></br>
                Santa Catarina, Brasil
            </CurrentAddress>
            <ContactInfo>
                lucasazzollinivieira@gmail.com
                <br></br>
                +55 (47) 9 9698-8923
            </ContactInfo>
            <Socials>
                <nav>
                    <a href="https://www.linkedin.com/in/azzolinilucas/" title="LinkedIn">
                        <LinkedIn sx={{ fontSize: 46, color: "#111" }} />
                    </a>
                    <a href="https://twitter.com/zulenno" title="Twitter">
                        <Twitter sx={{ fontSize: 46, color: "#111" }} />
                    </a>
                    <a href="https://github.com/Lucas-zz" title="GitHub">
                        <GitHub sx={{ fontSize: 46, color: "#111" }} />
                    </a>
                </nav>
            </Socials >
        </Container >
    );
}