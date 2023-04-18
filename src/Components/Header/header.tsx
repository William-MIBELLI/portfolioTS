import { useDispatch } from "react-redux";
import Techno from "../Techno/techno";
import { Container, LinkContactContainer } from "./header.style";
import { resetSelectedProject } from "../../Store/Project/project.action";
import { useSelector } from "react-redux";
import { selectProjectArray } from "../../Store/Project/projet.selector";
import IconHeader from "../Icon-Header/iconHeader";
import Brand from "../brand/brand";

const Header = () => {

    const dispatch = useDispatch()
    const state = useSelector(selectProjectArray)
    const onClickHandler = () => {
        dispatch(resetSelectedProject(state))
    }

    return (
        <Container>
            <Brand clickHandler={onClickHandler}></Brand>
            <LinkContactContainer>
                <IconHeader name="gmail" link="mailto:william.mibelli@gmail.com"/>
                <IconHeader name="github" link='https://github.com/William-MIBELLI?tab=repositories'/>
            </LinkContactContainer>
        </Container>
    )
}

export default Header