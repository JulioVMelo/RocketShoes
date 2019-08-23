import React from 'react';
import { Container, Cart } from './styles';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

export default function header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocket shoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>
            Meu carrinho
          </strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#fff"/>
      </Cart>
      
    </Container>
  );
}
