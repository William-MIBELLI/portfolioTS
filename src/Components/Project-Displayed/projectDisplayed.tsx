import { FC } from 'react'
import { Project } from '../../Store/Project/project.type'
import { Container, LinkContainer, TechnoContainer, UrlLink, Title, Content } from './projectDisplayed.style'
import Techno from '../Techno/techno'

type ProjectProps = { project: Project}

const ProjectDisplayed: FC<ProjectProps> = ({ project }) => {

    const { name, description, urlSite, urlGit, technos } = project

    return (
        <Container>
            <Title>{name}</Title>
            <Content>{description}</Content>
            <TechnoContainer>
                {technos.map(techno => (<Techno name={techno}/>))}
            </TechnoContainer>
            <LinkContainer>
                <UrlLink href={urlSite} target='_blank' rel="noreferrer">Le site</UrlLink>
                <UrlLink href={urlGit} target='_blank' rel="noreferrer">Le GitHub</UrlLink>
            </LinkContainer>
        </Container>
    )
}

export default ProjectDisplayed