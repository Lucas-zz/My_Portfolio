import { Container } from "./style";
import Loading from "../../assets/puff_loading.svg";

export default function Load() {
    return (
        <Container>
            <img src={Loading} alt="Loading gif of a cup of coffee turning around and enlarging while the contents of the page load" />
        </Container>
    );
}