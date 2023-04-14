import styled from "styled-components";

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 3px solid #7CA655;
    border-right: 3px solid #7CA655;
    border-radius: 4px 5px 4px 0

`
export const LinkContactContainer = styled.div`
    width: 200px;
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

export const Brand = styled.p`
    margin-left: 10px;
    margin-bottom: auto;
    margin-top: auto;
    cursor: pointer;
    color: white;
    font-size: 3rem;
    &:hover{
        color: #7CA655;
    }
`