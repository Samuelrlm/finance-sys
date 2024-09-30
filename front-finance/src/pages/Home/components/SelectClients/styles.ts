import styled from "styled-components";

export const ContainerSelect = styled.div`
   width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E0E0E0FF;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    .content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
    }
    .icon{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px;
    }
    &:hover{
        border: 1px solid #F09448FF;
    }
`
export const ContainerOptions = styled.div`
    width: 250px;
    height: 300px;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E0E0E0FF;
    border-radius: 5px;
    position: absolute;
    padding-top: 10px;
    top: 55px;
    z-index: 1;
    gap: 5px;
    .clean-btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        button{
            width: 90%;
            background-color: #F09448FF;
            border: none;
            border-radius: 5px;
            padding: 5px;
            color: white;
            cursor: pointer;
        }
    }
    .option{
        width: 95%;
        min-height: 50px;
        background-color: white;
        border-radius: 5px;
        position: relative;
        display: flex;
        cursor: pointer;
        &:hover{
            background-color: #F0F0F0FF;
        }
        .chekcbox{
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .content{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }
    }
`