import { Contained, Container, Grid, More, Project, Title } from "./style";
import globo from "../../assets/globo.svg"
import TrackIt from "../../assets/TrackIt.svg";
import MyWallet from "../../assets/MyWallet.svg";
import MegaStore from "../../assets/MegaStore.png";
import linkr from "../../assets/linkr.svg";

export default function ProjectPage() {
    return (
        <>
            <Container>
                <Grid>
                    <Project>
                        <Contained>
                            <Title height={false}>
                                <img src={globo} alt="globo.com logo" />
                            </Title>
                        </Contained>
                    </Project>
                    <Project>
                        <Contained>
                            <Title height={false}>
                                <img src={TrackIt} alt="globo.com logo" />
                            </Title>
                        </Contained>
                    </Project>
                    <Project>
                        <Contained>
                            <Title height={true}>
                                <img src={MyWallet} alt="globo.com logo" />
                            </Title>
                        </Contained>
                    </Project>
                    <Project>
                        <Contained>
                            <Title height={false}>
                                <img src={MegaStore} alt="globo.com logo" />
                            </Title>
                        </Contained>
                    </Project>
                    <Project>
                        <Contained>
                            <Title height={false}>
                                <img src={linkr} alt="globo.com logo" />
                            </Title>
                        </Contained>
                    </Project>
                    <More>
                        More projects will be added soon!
                    </More>
                </Grid>
            </Container>
        </>
    );
}