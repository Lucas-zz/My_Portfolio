import { ContactInfo, Container, CurrentAddress, Logo, MainContainer, Socials } from "./style";
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/react-lottie.json';

export default function Footer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <MainContainer>
            <Logo>
                <Link to="/">
                    <h3 title="Lucas Azzolini Vieira">L.A.V.</h3>
                </Link>
                <Container>
                    <p>Made with</p>
                    <Lottie
                        options={defaultOptions}
                        width={46}
                        height={46}
                    />
                </Container>
            </Logo>
            <CurrentAddress title="Reach me out for more information">
                105 Maringa Street
                <br></br>
                Blumenau, Brazil
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
        </MainContainer >
    );
}