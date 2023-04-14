import { useSelector } from "react-redux";
import { Container, Title, LinksContainer } from "./menu.style";
import {  selectProjectName } from "../../Store/Project/projet.selector";
import MenuLink from "../Menu-Link/menuLink";

const Menu = () => {

    const projectNames = useSelector(selectProjectName)

    return (
        <Container>
            <Title>Projets</Title>
            <LinksContainer>
                {projectNames.map(name => {
                    return (
                        <MenuLink name={name} key={name}/>
                    )
                })}
            </LinksContainer>
        </Container>
    )
}

export default Menu