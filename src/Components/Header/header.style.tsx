import styled from "styled-components";

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

`
export const LinkContactContainer = styled.div`
    width: 200px;
    margin-left: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

export const Brand = styled.p`
    margin-left: 10px;
    margin-bottom: auto;
    cursor: pointer;
    color: white;
    font-size: 3rem;
    &:hover{
        color: #7CA655;
    }
`