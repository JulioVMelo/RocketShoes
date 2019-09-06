import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../../store/ducks/products';
import * as CartActions from '../../store/ducks/cart';
// import { Creators as ProductActions } from '../../store/ducks/products';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

class Home extends Component{
  componentDidMount() {
    this.props.ProductActions.asyncListProducts();
  };

  handleAddCart = id => {
    this.props.CartActions.addProductToCart(id);
  };

  render(){
    return(
      <ProductList>
        {
          this.props.state.products.map(item => 
            <li key={item.id}>
              <img src={item.image} alt={item.name}/>
              <strong> {item.name} </strong>
              <span>R$ {item.price}</span>
              <button type="button" onClick={() => this.handleAddCart(item.id)}>
                <div>
                  <MdAddShoppingCart size={16} color="#fff"/> {item.stock}
                </div>
                <span>
                  Adicionar ao carrinho
                </span>
              </button>
            </li>
          )
        }
      </ProductList>
    );
  }
};

const mapStateToProps = state => ({
  state,
});

// const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

function mapDispatchToProps(dispatch) {
  return {
    ProductActions: bindActionCreators(ProductActions, dispatch),
    CartActions: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
