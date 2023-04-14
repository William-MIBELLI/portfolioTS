import { useDispatch } from "react-redux";
import Techno from "../Techno/techno";
import { Container, LinkContactContainer, Brand } from "./header.style";
import { resetSelectedProject } from "../../Store/Project/project.action";
import { useSelector } from "react-redux";
import { selectProjectArray } from "../../Store/Project/projet.selector";
import IconHeader from "../Icon-Header/iconHeader";

const Header = () => {

    const dispatch = useDispatch()
    const state = useSelector(selectProjectArray)
    const onClickHandler = () => {
        dispatch(resetSelectedProject(state))
    }

    return (
        <Container>
            <Brand onClick={onClickHandler}>William MIBELLI</Brand>
            <LinkContactContainer>
                <IconHeader name="gmail" link="mailto:william.mibelli@gmail.com"/>
                <IconHeader name="github" link='https://github.com/William-MIBELLI?tab=repositories'/>
                <IconHeader name="cv" link=""/>
            </LinkContactContainer>
        </Container>
    )
}

export default Header