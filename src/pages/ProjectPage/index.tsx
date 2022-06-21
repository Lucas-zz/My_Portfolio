import { Contained, Container, ContainerButtons, Grid, Icons, More, MUIStyles, Project, Title } from "./style";
import globo from "../../assets/globo.svg"
import TrackIt from "../../assets/TrackIt.svg";
import MyWallet from "../../assets/MyWallet.svg";
import MegaStore from "../../assets/MegaStore.png";
import linkr from "../../assets/linkr.svg";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Lottie from 'react-lottie';
import AnimationData from '../../assets/lotties/index';
import PostgreSQL from '../../assets/postgresql.svg';

export default function ProjectPage() {

    const projects = [
        {
            id: 1,
            name: "Projeto - globo.com",
            repoUrl: "https://github.com/Lucas-zz/globo.com",
            appUrl: "",
            image: globo,
            technologies: [
                { html: AnimationData.html5 },
                { css: AnimationData.css3 },
            ]
        },
        {
            id: 2,
            name: "Projeto - Track It",
            repoUrl: "https://github.com/Lucas-zz/Track_It",
            appUrl: "",
            image: TrackIt,
            technologies: [
                { html: AnimationData.html5 },
                { css: AnimationData.css3 },
                { javaScript: AnimationData.javaScript },
                { react: AnimationData.reactJS },
                { node: AnimationData.nodeJS },
            ]
        },
        {
            id: 3,
            name: "Projeto - My Wallet",
            repoUrl: "https://github.com/Lucas-zz/MyWallet_frontEnd",
            appUrl: "",
            image: MyWallet,
            technologies: [
                { html: AnimationData.html5 },
                { css: AnimationData.css3 },
                { javaScript: AnimationData.javaScript },
                { react: AnimationData.reactJS },
                { node: AnimationData.nodeJS },
                { mongo: AnimationData.mongoDB },
            ]
        },
        {
            id: 4,
            name: "Projeto - Mega Store",
            repoUrl: "https://github.com/Lucas-zz/mega-store-front",
            appUrl: "",
            image: MegaStore,
            technologies: [
                { html: AnimationData.html5 },
                { css: AnimationData.css3 },
                { javaScript: AnimationData.javaScript },
                { react: AnimationData.reactJS },
                { node: AnimationData.nodeJS },
                { mongo: AnimationData.mongoDB },
            ]
        },
        {
            id: 5,
            name: "Projeto - Linkr",
            repoUrl: "https://github.com/Lucas-zz/Linkr-Front",
            appUrl: "",
            image: linkr,
            technologies: [
                { html: AnimationData.html5 },
                { css: AnimationData.css3 },
                { javaScript: AnimationData.javaScript },
                { react: AnimationData.reactJS },
                { node: AnimationData.nodeJS },
                { postgresql: PostgreSQL, },
            ]
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const html = {
        loop: true,
        autoplay: true,
        animationData: AnimationData.html5,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const javaScript = {
        loop: true,
        autoplay: true,
        animationData: AnimationData.javaScript,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const react = {
        loop: true,
        autoplay: true,
        animationData: AnimationData.reactJS,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const node = {
        loop: true,
        autoplay: true,
        animationData: AnimationData.nodeJS,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const mongo = {
        loop: true,
        autoplay: true,
        animationData: AnimationData.mongoDB,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <Container>
                <Grid>
                    {projects.map((project) => (
                        <Project key={project.id}>
                            <Contained>
                                <Title>
                                    <img src={project.image} alt={project.name} />
                                </Title>
                                <Icons>
                                    {project.technologies.map(({ tech }: any) => (
                                        <Lottie
                                            options={{
                                                loop: true,
                                                autoplay: true,
                                                animationData: tech,
                                                rendererSettings: {
                                                    preserveAspectRatio: "xMidYMid slice"
                                                }
                                            }}
                                            width={66}
                                            height={66}
                                        />
                                    ))

                                    }
                                </Icons>
                                <ContainerButtons>
                                    <a href={project.repoUrl}>
                                        <Button sx={MUIStyles.button} variant="contained">
                                            Repository
                                        </Button>
                                    </a>
                                    <a href={project.appUrl}>
                                        <Button sx={MUIStyles.button} variant="contained">
                                            Application
                                        </Button>
                                    </a>
                                </ContainerButtons>
                            </Contained>
                        </Project>
                    ))}
                    <More>
                        More projects will be added soon!
                    </More>
                </Grid>
            </Container>
        </>
    );
}