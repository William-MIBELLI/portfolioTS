import { useDispatch } from "react-redux"
import { Project } from "../../Store/Project/project.type"
import { Container } from "./menuLink.style"
import { FC } from "react"
import { changeSelectedProject } from "../../Store/Project/project.action"
import { useSelector } from "react-redux"
import { selectProjectArray } from "../../Store/Project/projet.selector"

type MenuLinkProps = { name: string}

const MenuLink: FC<MenuLinkProps> = ({ name }) => {

    const dispatch = useDispatch()
    const state = useSelector(selectProjectArray)

    const onClickHandler = () => {
        dispatch(changeSelectedProject(name, state))
    }

    return (
        <Container onClick={onClickHandler}>
            {name}
        </Container>
    )
}

export default MenuLink