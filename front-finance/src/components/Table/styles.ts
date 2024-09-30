import styled from "styled-components";

export const ContainerTable = styled.table`
    width: 100%;
    max-height: 500px;
    border-radius: 10px;
    background-color: #EBEBEBFF;
    border: 1px solid #EBEBEBFF;
    overflow: hidden;
    margin-top: 20px;
    border-spacing: 0;
    thead {
        tr {
            border-bottom: 1px solid #5E5E5EFF;
            padding: 10px;
        }
        th {
            text-align: left;
            padding: 10px 10px;
            color: #5E5E5EFF;
            border-bottom: 1px solid #9E9E9EFF;
        }
    }
    
    tbody{
        overflow-y: scroll;
        td {
            padding: 10px;
            color: #272727FF;
            border-bottom: 1px solid #777777FF;
        }
        tr {
            border-radius: 5px;
            background-color: #fff;
        }
    }
`