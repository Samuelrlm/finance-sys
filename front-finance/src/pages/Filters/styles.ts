import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background-color: #fff;
   margin-bottom: 20px;
   padding: 10px;
    border-radius: 10px;
    .filter{
        padding: 10px;
        display: flex;
        flex-direction: column;
        border: 1px solid #00000033;
        border-radius: 10px;
        margin-top: 10px;
        cursor: pointer;
        .show{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                color: #5E5E5EFF;
            }
        }
        &:hover{
            border: 1px solid #F09448FF;
        }
        .options{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 10px;
            border-top: 1px solid #00000033;
            padding-top: 10px;
            .client-container{
                background-color: #BEBEBEFF;
                border-radius: 5px;
                padding: 5px;
                display: flex;
                flex-direction: column;
                .name{
                    padding: 5px;
                    border-bottom: 1px solid #00000033;
                }
            }
            .dates{
                display: flex;
                margin-top: 10px;
                gap: 10px;
                p{
                    color: #252525FF;
                    font-size: 14px;
                }
            }
            .filters-details{
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 10px;
                .filter-details{
                    display: flex;
                    flex-direction: column;
                    background-color: #BEBEBEFF;
                    border-radius: 5px;
                    padding: 5px;
                    gap: 5px;
                    
                    .clients{
                        display: flex;
                        flex-direction: column;
                        background-color: #fff;
                        border-radius: 5px;
                        padding: 5px;
                        .name{
                            padding: 5px;
                            width: 100%;
                            border-bottom: 1px solid #00000033;
                        }
                    }
                }
            }
        }
    }
`