import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

export const TopImg = styled.img`
    position: absolute;
    top : 0;
    width: 600px;
    right: 0;
`

export const BotImg = styled.img`
    position: absolute;
    bottom: 0;
    left : 0;
    width: 27%;
    z-index: -5;
`