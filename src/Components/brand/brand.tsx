import { FC } from "react";
import { Container, AnimationContainer, First, Second, Third } from "./brand.style";

type BrandProps = { clickHandler: React.MouseEventHandler<HTMLParagraphElement>}

const Brand: FC<BrandProps> = ({ clickHandler }) => {
    return (
        <Container>
            <p onClick={clickHandler}>William MIBELLI</p>
        <AnimationContainer>
            <First><div>34 ans</div></First>
            <Second><div>Développeur WEB</div></Second>
            <Third><div>Full stack</div></Third>
        </AnimationContainer>
        </Container>
    )
}

export default Brand