import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 85%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
    .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding-right: 10px;
    }
    .filters{
        display: flex;
        gap: 20px;
        .date {
            display: flex;
            flex-direction: column;
            background-color: #E0E0E0FF;
            padding: 5px;
            border-radius: 5px;
            p{
                font-size: 12px;
                color: #646464FF;
            }
            input{
                border: none;
                outline: none;
                background-color: #E0E0E0FF;
                border-radius: 5px;
                padding: 2px;
            }
        }
        button{
            width: 100px;
            font-size: 12px;
            font-weight: bold;
            background-color: #F09448FF;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 5px;
            cursor: pointer;
        }
    }
`