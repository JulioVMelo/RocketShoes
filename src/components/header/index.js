import React from 'react';
import { Container, Cart } from './styles';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

  const header = ({state}) => {

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
          <span> 
            {
              state.length === 0 ? <span>Nenhum item adicionado</span> : <span>{state.length} item(s)</span>
            } 
          </span>
        </div>
        
        <MdShoppingBasket size={36} color="#fff"/>
        
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  state: state.cart
});

export default connect(mapStateToProps)(header);
