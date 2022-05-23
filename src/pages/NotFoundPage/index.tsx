import { Container, Error, ErrorCode, ErrorMessage, Four } from "./style";
import deathStar from "../../assets/death-star-404.png";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <Container>
                <Error>
                    <ErrorCode>Error</ErrorCode>
                    <Four>4</Four>
                    <img src={deathStar} alt="" />
                    <Four>4</Four>
                </Error>
                <ErrorMessage>
                    <span>Great shot, kid. That was one in a million.</span>
                    <p>
                        Let's get you
                        <Link to="/">back</Link>
                        .
                    </p>
                </ErrorMessage>
            </Container >
        </>
    );
}