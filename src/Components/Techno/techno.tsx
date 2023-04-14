import { FC } from 'react'
import { Container } from './techno.style'

type TechnoProps = { name: string }


const Techno: FC<TechnoProps> = ({ name }) => {


    return (
        <>
            <Container src={require(`../../Asset/Icons/${name}.png`)}/>
        </>
        
    )
}

export default Techno