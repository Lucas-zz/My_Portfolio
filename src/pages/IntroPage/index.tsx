import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Navigator, QuoteSection } from "./style";

import { quotes } from "../../utils/quotesUtils";

export default function IntroPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let quoteNumber = 0;

    window.scrollTo(0, 0);

    randomQuotePicker();

    function randomQuotePicker(): number {
        quoteNumber = Math.floor(Math.random() * 4);

        return quoteNumber;
    }

    return (
        <Container>
            <Navigator>
                <div>
                    <Link to="/about-me">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </Navigator>
            <QuoteSection>
                <div>
                    <p>{quotes[quoteNumber].message}</p>
                    <span>- {quotes[quoteNumber].author}</span>
                </div>
            </QuoteSection>
        </Container>
    );
}