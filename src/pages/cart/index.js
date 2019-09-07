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

class Cart extends Component {

  componentDidMount() {
    this.props.CartActions.listCart();
  }

  handleIncrementAmount(id) {
    this.props.CartActions.incrementAmount(id);
  }

  handleDecrementAmount(id) {
    this.props.CartActions.decrementAmount(id);
  }

  render() {
    const result = this.props.state.cart.map(cartItem => this.props.state.products.find(productItem => cartItem.id === productItem.id ));
    return (
      <Container>
        {result.length <= 0 ? 
          <h3>Nenhum item adicionado ao carrinho</h3>
        : 
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
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="text" readOnly value={this.props.state.cart[index].amount}/>
                      <button type="button" onClick={()=> this.handleIncrementAmount(this.props.state.cart[index].id)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </Amount>
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
              ))}
            </tbody>
          </ProductTable>
        }

        {result.length > 0 &&
          <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
              <span>Total</span>
              <strong>R$ 1920,00</strong>
            </Total>
          </footer>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state
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
