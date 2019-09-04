import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/ducks/cart";
import { Container, ProductTable, Total } from "./styles";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from "react-icons/md";

class Cart extends Component {
  componentDidMount() {
    this.props.CartActions.listCart();
  }

  render() {
    return (
      <Container>
        {this.props.state.cart.length <= 0 ? (
          <h3>Nenhum item adicionado ao carrinho</h3>
        ) : (
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
              {this.props.state.cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>
                    <strong>{item.name}</strong>
                    <span>R$ {item.price}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
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
              ))}
            </tbody>
          </ProductTable>
        )}

        {this.props.state.cart.length > 0 && (
          <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
              <span>Total</span>
              <strong>R$ 1920,00</strong>
            </Total>
          </footer>
        )}
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
