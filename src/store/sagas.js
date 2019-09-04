import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '../services/api';

function* asyncListProducts() {
  try {
    const response = yield call(api.get, '/products');
    yield put({ type: 'ASYNC_LIST_PRODUCTS_SUCCESS', payload: response.data })

  } catch(error){
    console.log(error);
  } 
}

function* asyncListCart() {
  try {
    
      const response = yield select();
      const result = response.cart.map(cartItem => response.products.find(productItem => cartItem.id === productItem.id ));
      yield put({type: 'ASYNC_LIST_CART_SUCCESS', payload: result});
 
  } catch(error) {
    console.log(error);
  }
}

function* asyncAddCart({payload}) {
  try {
    console.log("id do produto clicado", payload.id);
    yield put({type: 'ASYNC_ADD_CART_SUCCESS', payload: payload.id})
  } catch(error) {
    console.log(error)
  }
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_LIST_PRODUCTS', asyncListProducts),
    takeLatest('ASYNC_ADD_CART', asyncAddCart),
    takeLatest('ASYNC_LIST_CART', asyncListCart),
  ]);
}
