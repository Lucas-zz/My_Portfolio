import { Container, Error, ErrorCode, ErrorMessage, Four } from "./style";
import deathStar from "../../assets/death-star-404.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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