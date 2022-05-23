import { useEffect } from "react";
import { Container, Text, Title } from "./style";

export default function AboutMePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location]);

    return (
        <Container>
            <Title>About Me</Title>
            <Text>
                My name is Lucas Azzolini Vieira, born in Porto Alegre-RS / Brazil, but I currently live in Blumenau-SC / Brazil. I'm a very detail-oriented person, I love to learn new things and I have a big imagination. I also love coffee (as can be noticed on the intro page haha) and I don't like waking up too early, I'm a night owl.
            </Text>
            <Text>
                My first contact with technology was very early on, that was because my father was an IT Analyst, and I always loved games of all kinds. At age 15, during high school, I took an integrated IT course. In this course I discovered a whole new world, learning HTML5, CSS, Java, SQL(MySQL) and Computer Networks. By learning all these languages, I realized that I really liked what it was possible to create with them, but having some difficulties with Java, I ended up choosing to pursue another area of ​​studies for my future.
            </Text>
            <Text>
                At the University, I studied Control and Automation Engineering for 5 years, but I ended up not graduating. There, I learned several areas of studies such as C language, computer networks, object-oriented programming (Java), etc. I also had the opportunity to do an internship in Software Development and Specialized Technical Support serving customers from all over the world where I was able to develop my speaking, writing and listening skills in English. There, I had a lot of contact with C#, VB.NET, JavaScript, Communication Protocols, PLCs, etc.
            </Text>
            <Text>
                In the final moments of my graduation, I felt that I was no longer enjoying the future that Control and Automation would bring me. Therefore, I chose to start a new degree in Full-Stack Web Development, where I had contact, again, with HTML5, CSS3 and other technologies, such as: JavaScript ES6, Git, ReactJS, Express, NodeJS, MongoDB (NoSQL), Applications, PostgreSQL, REST, Typescript, Automated Tests (Jest, Cypress), Prism, etc. In addition, I took classes for personal and interpersonal development where I learned to communicate better, have self-knowledge, time planning, create habits, know how to give and receive feedback, have emotional intelligence and how to work in a team using agile methodologies (Scrum), Slack, GitHub, Trello, Zoom, etc.
            </Text>
            <Text>
                After months of studies, I learned enough to work confidently with both Front-end and Back-end, as well as Full-stack. I have my preferences, of course: Front-end always caught my attention, because I have a big imagination and being able to put all this on the screen makes me very excited. I have a lot of appreciation for NoSQL databases (MongoDB), but I really like the stability of SQL databases (PostgreSQL), too.
            </Text>
            <Text>
                As I like to learn new things all the time, the Dev's career provides me with many adventures and paths I can follow. As a hobby, I love playing computer games and I always had a dream to create one on my own. So, for the future, even if it's just a new hobby, I hope to learn more about C# and maybe venture into the world of Unity.
            </Text>
            <Text>
                Thank you for reading this far, I really appreciate it! :)
            </Text>
        </Container>
    );
}