import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-gap: 20px;
  list-style: none;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      flex-grow: 1;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: 900;
      margin: 5px 0 20px;
    }

    button {
      background-color: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background-color .2s;
      cursor: pointer;
      
      &:hover {
        background-color: ${darken(0.03, "#7159c1")}
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: rgba(0,0,0, .1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: 900;
      }
    }
  }
`;
