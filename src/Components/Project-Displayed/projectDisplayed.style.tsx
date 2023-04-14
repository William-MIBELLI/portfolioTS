import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin: auto;
`

export const TechnoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
export const Techno = styled.p`
    margin: 0 10px;
`

export const UrlLink = styled.a`
    text-decoration: none;
    color: white;
    margin: 0 10px;
    border-bottom: 2px solid #F9D448;

    &:hover{
        border-bottom: 2px solid #7CA655;
    }
`

export const Title = styled.h2`
    margin: 5px 0 0 5px;
`

export const Content = styled.p`
    margin: 30px 0 30px 30px;
    text-align: justify;

`