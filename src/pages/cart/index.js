import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/ducks/cart";
import { Container, ProductTable, Total, Amount } from "./styles";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from "react-icons/md";

import {formatPrice} from '../../util/format';

class Cart extends Component {

  componentDidMount() {
    this.props.CartActions.listCart();
  }

  handleIncrementAmount(id) {
    this.props.CartActions.incrementAmount(id);
  }

  handleDecrementAmount(id) {

    let item = this.props.state.cart.filter(item => item.id === id);
    let itemAmount = item[0].amount;

    if(itemAmount > 1) {
      this.props.CartActions.decrementAmount(id);
    }
  }

  handleRemoveItem(id) {
    this.props.CartActions.removeItemToCart(id);
  }

  render() {
    const result = this.props.state.cart.map(cartItem => this.props.state.products.find(productItem => cartItem.id === productItem.id ));
    return (
      <Container>
        {result.length <= 0 ?
          <h3>Nenhum item adicionado ao carrinho</h3> :
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
              {
                result.map((item,index) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>
                    <strong>{item.name}</strong>
                    <span>R$ {item.price}</span>
                  </td>
                  <td>
                    <Amount>
                      <button type="button" onClick={()=> this.handleDecrementAmount(this.props.state.cart[index].id)}>
                        <MdRemoveCircleOutline size={20} color={this.props.state.cart[index].amount > 1 ? '#7159c1': '#ccc'} />
                      </button>
                      <input type="text" readOnly value={this.props.state.cart[index].amount}/>
                      <button type="button" onClick={()=> this.handleIncrementAmount(this.props.state.cart[index].id)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </Amount>
                  </td>
                  <td>
                    <strong>{formatPrice(this.props.state.cart[index].subTotal)}</strong>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.handleRemoveItem(item.id)}>
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
        }

        {result.length > 0 &&
          <footer>
            <button type="button" onClick={() => this.props.CartActions.buy()}>Finalizar pedido</button>
            <Total>
              <span>Total</span>
              <strong>{formatPrice(this.props.state.cart.reduce((acc, item) => (
                acc + item.subTotal
                ),0)) }</strong>
            </Total>
          </footer>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

function mapDispatchToProps(dispatch) {
  return {
    CartActions: bindActionCreators(CartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
