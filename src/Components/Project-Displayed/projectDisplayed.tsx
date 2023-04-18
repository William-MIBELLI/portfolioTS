import { FC, useState } from 'react'
import { Project } from '../../Store/Project/project.type'
import { Container, LinkContainer, TechnoContainer, UrlLink, Title, Content, LogsContainer, T, Password, PasswordOver } from './projectDisplayed.style'
import Techno from '../Techno/techno'

type ProjectProps = { project: Project}

const ProjectDisplayed: FC<ProjectProps> = ({ project }) => {

    const { name, description, urlSite, urlGit, technos } = project
    const [isHover, setIsHover] = useState(true)

    const onMouseEnterHandler = () => {
        setIsHover(false)
    }

    const onMouseLeaveHandler = () => {
        setIsHover(true)
    }

    return (
        <Container>
            <Title>{name}</Title>
            <Content>{description}</Content>
            {project.logs && (
                <LogsContainer>
                        <T>user</T> {project.logs[0]} <br/>
                        <T>password</T> <Password  onMouseLeave={onMouseLeaveHandler} onMouseEnter={onMouseEnterHandler}><PasswordOver isHover={isHover as boolean}/>{project.logs[1]}</Password>
                </LogsContainer>
            )}
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