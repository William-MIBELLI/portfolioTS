import styled from "styled-components";

export const Container = styled.p`
    cursor: pointer;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: auto;

    &:hover::after{
        content:"";
        background-color: #FFA559;
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: -2px;
    }

    &:hover{
        color: white;
    }
`
