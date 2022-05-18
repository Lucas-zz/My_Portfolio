import { Link } from "react-router-dom";
import { Container, Navigator, QuoteSection } from "./style";
import Footer from "../../components/Footer";

export default function IntroPage() {

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
        <>
            <Container>
                <Navigator>
                    <div>
                        <Link to="/about-me">Sobre Mim</Link>
                        <Link to="/projects">Projetos</Link>
                        <Link to="/contact">Contato</Link>
                    </div>
                </Navigator>
                <QuoteSection>
                    <div>
                        <p>{quotes[quoteNumber].message}</p>
                        <span>- {quotes[quoteNumber].author}</span>
                    </div>
                </QuoteSection>
            </Container>
            <Footer />
        </>
    );
}