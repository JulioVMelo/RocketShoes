import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      text-transform: uppercase;
      font-weight: 900;
      transition: background-color .2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')}
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  
  thead th{
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 900;
  }
  
  button {
    background: none;
    border: 0;
    padding: 6px;
    cursor: pointer;
  }
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
    text-align: center;
  }

  
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  
  span {
    color: #999;
    font-weight: 900;
  }

  strong {
    margin-left: 5px;
    font-size: 28px;
  }
`;
