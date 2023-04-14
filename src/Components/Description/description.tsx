import { useSelector } from "react-redux";
import { Container } from "./description.style";
import { selectProjectSelected } from "../../Store/Project/projet.selector";
import ProjectDisplayed from "../Project-Displayed/projectDisplayed";
import Presentation from "../Presentation/presentation";


const Description = () => {

    const projectToDisplay = useSelector(selectProjectSelected)
    console.log('projet selectionné : ', projectToDisplay)

    return (
        <Container>
            {projectToDisplay 
            ? (<ProjectDisplayed project={projectToDisplay}/>)
            : (<Presentation/>)}
        </Container>
    )
}
export default Description