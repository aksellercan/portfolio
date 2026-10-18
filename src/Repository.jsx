import { Container } from "react-bootstrap";

export default function Repository(props) {
    console.log(`prop ${props.name}`);
    return <Container>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>Language: {props.language}</p>
    </Container>
}