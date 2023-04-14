import { FC } from 'react'
import { Container } from './iconHeader.style'

type IconHeaderProps = { name: string, link: string}

const IconHeader:FC<IconHeaderProps> = ({ name, link }) => {

    return (
        <a href={link} target='_blank' rel="noreferrer">
            <Container src={require(`../../Asset/Icons/${name}.png`)}/>
        </a>
    )
}

export default IconHeader