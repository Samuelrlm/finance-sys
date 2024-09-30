import styled from "styled-components";

export const ContainerMenu = styled.div`
   width: 20%;
   height: 100%;
   display: flex;
   flex-direction: column;
   background-color: white;
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
`

export const Option = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    &:hover {
        background-color: #F0F0F0FF;
    }
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`