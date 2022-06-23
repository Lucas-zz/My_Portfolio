import {
    Contained,
    Container,
    ContainerButtons,
    Grid,
    Icons,
    More,
    MUIStyles,
    Project,
    Title,
    Icon,
    ProjectLogo
} from "./style";
import { useEffect } from "react";
import { Button, Typography } from "@mui/material";

import PostgreSQL from '../../assets/postgresql.svg';

import Lottie from 'react-lottie';
import { projects } from "../../utils/projectUtils";

export default function ProjectPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container>
                <Title>Projects</Title>
                <Grid>
                    {projects.map((project) => (
                        <Project key={project.id}>
                            <Contained>
                                <ProjectLogo>
                                    <img src={project.image} alt={project.name} />
                                </ProjectLogo>
                                <Typography variant="subtitle1" sx={MUIStyles.typography}>Developed with</Typography>
                                <Icons>
                                    <Icon>
                                        {project.technologies.map((tech: any) => (
                                            tech === PostgreSQL ?
                                                <img title="PostgreSQL" src={tech} alt="PostgreSQL database" />
                                                :
                                                <Lottie
                                                    title={tech.title}
                                                    options={tech}
                                                />
                                        ))}
                                    </Icon>
                                </Icons>
                                <ContainerButtons>
                                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                        <Button sx={MUIStyles.button} variant="contained">
                                            Repository
                                        </Button>
                                    </a>
                                    <a href={project.appUrl} target="_blank" rel="noreferrer">
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