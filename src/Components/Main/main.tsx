import Description from "../Description/description";
import Menu from "../Menu/menu";
import { Container } from "./main.style";

const Main = () => {
    return (
        <Container>
            <Description/>
            <Menu/>
        </Container>
    )
}

export default Main