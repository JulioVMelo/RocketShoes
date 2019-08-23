import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return(
    <ProductList>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="shoes" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          <span>
            Adicionar ao carrinho
          </span>
        </button>
      </li>

      <li>
        <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="shoes" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          <span>
            Adicionar ao carrinho
          </span>
        </button>
      </li>

      <li>
        <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="shoes" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          <span>
            Adicionar ao carrinho
          </span>
        </button>
      </li>

      <li>
        <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="shoes" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          <span>
            Adicionar ao carrinho
          </span>
        </button>
      </li>

      <li>
        <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="shoes" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          <span>
            Adicionar ao carrinho
          </span>
        </button>
      </li>

      <li>
        <img src="https://imgcentauro-a.akamaihd.net/900x900/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg" alt="shoes" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          <span>
            Adicionar ao carrinho
          </span>
        </button>
      </li>
    </ProductList>
  );
};
