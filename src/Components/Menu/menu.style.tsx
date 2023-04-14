import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-left: 3px solid #0E8388;
    border-top: 3px solid #0E8388;
    border-radius: 5px 4px 0 4px;
`
export const Title = styled.h2`
    margin: 15px 0 0 15px;
    position: absolute;
    top: 0;
`
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto 0;
    height: 40%;
    margin-left: 30px;
`