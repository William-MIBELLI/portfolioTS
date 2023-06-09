import styled from "styled-components";

export const Container = styled.main`
    height: 600px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 1100px){
        flex-direction: column-reverse;
        height: fit-content;
    }
`