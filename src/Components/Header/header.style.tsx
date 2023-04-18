import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 3px solid #7CA655;
    border-right: 3px solid #7CA655;
    border-radius: 4px 5px 4px 0;
    max-height: 60px;

    @media screen and (max-width: 1300px){
        width: 90%;
    }

`
export const LinkContactContainer = styled.div`
    width: 200px;
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`
// const leftTransfert = keyframes`
//     from {
//         left: -550px;
//     }
//     to {
//         left : 0;
//     }
// `

// export const Brand = styled.span`
//     margin-left: 10px;
//     margin-bottom: auto;
//     margin-top: auto;
//     cursor: pointer;
//     color: white;
//     max-height : 100%;
//     overflow: hidden;
//     font-size: 3rem;
//     position: relative;
//     &:hover{
//         color: #7CA655;
//     }
//     animation: ${leftTransfert} 1s ease 1;
// `
