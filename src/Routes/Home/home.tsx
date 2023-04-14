import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import Main from '../../Components/Main/main'
import Menu from '../../Components/Menu/menu'
import { Container, TopImg, BotImg } from './home.style'
import geoTop from '../../Asset/Images/geoTop.png'
import geoBot from '../../Asset/Images/geoBot.png'

const Home = () => {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
            <BotImg src={geoBot} />
        </Container>
    )
}

export default Home