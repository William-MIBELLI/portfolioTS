import styled, { keyframes } from "styled-components";

export const Animation = keyframes`
    0% {margin-top: 0;}
    10% {margin-top: 0;}
    20% {margin-top: -5.90rem;}
    30% {margin-top: -5.90rem;}
    40% {margin-top: -11.80rem;}
    60% {margin-top: -11.80rem;}
    70% {margin-top: -5.90rem;}
    80% {margin-top: -5.90rem;}
    90% {margin-top: 0;}
    100% {margin-top: 0;}
`

export const Container = styled.div`
    font-size: 2.26rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-weight: bold;
        cursor: pointer;

        &:hover{
            color: #7CA655;
        }
    }
`

export const AnimationContainer = styled.div`
    height:50px;
    overflow:hidden;
    margin-left: 1rem;
    
    div{
        width: fit-content;
        div{
            padding: 0.25rem 0.75rem;
            height:2.81rem;
            margin-bottom: 2.81rem;
            display:inline-block;
        }
    }
    div:first-child{
        animation: ${Animation} 8s infinite;
    }
`

export const First = styled.div`
    background-color: #4495A2;
`

export const Second = styled.div`
    background-color: #7CA655;
`

export const Third = styled.div`
    background-color: #F9D448;
    color: #191825;
`