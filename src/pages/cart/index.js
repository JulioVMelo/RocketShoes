import React from 'react';

import { Container, ProductTable, Total } from './styles';
import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from 'react-icons/md';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Qtd.</th>
            <th>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="product"/>
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button> 
                <input type="text" readOnly value="2" />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$ 1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
