import styled from 'styled-components';

export const CardsContainer = styled.div`
      width: 100%;
      display: flex;
      margin-top: 20px;
      gap: 30px;
`

export const Card = styled.div`
      width: 220px;
      height: 80px;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px #00000033;
      p {
        color: #5E5E5EFF;
      } 

      div{
        width: 100%;
        display: flex;
        height: 100%;
        align-items: center;
    
      }
`