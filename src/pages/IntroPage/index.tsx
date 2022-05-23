import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Navigator, QuoteSection } from "./style";

export default function IntroPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location]);

    let quoteNumber = 0;

    window.scrollTo(0, 0);

    randomQuotePicker();

    const quotes = [
        {
            message: "Theory is when you know something, but it doesn't work. Practice is when something works, but you don't know why. Programmers combine theory and practice: Nothing works and they don't know why.",
            author: "Unknown"
        },
        {
            message: "Documentation is a love letter that you write to your future self.",
            author: "Damian Conway"
        },
        {
            message: "Anyone can write code that a computer can understand. Good programmers write code that humans can understand.",
            author: "Martin Fowler"
        },
        {
            message: "Sometimes it's better to leave something alone, to pause, and that's very true for programming.",
            author: "Joyce Wheeler"
        }
    ];

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