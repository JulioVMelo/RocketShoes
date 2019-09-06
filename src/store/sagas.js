import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '../services/api';
import {toast} from 'react-toastify';

function* asyncListProducts() {
  try {
    const response = yield call(api.get, '/products');
    yield put({ type: 'ASYNC_LIST_PRODUCTS_SUCCESS', payload: response.data })

  } catch(error){
    console.log(error);
    toast.error('Ocorreu um erro');
  } 
}

function* asyncListCart() {
  try {
      const response = yield select();
      // const result = response.cart.map(cartItem => response.products.find(productItem => cartItem.id === productItem.id ));
      yield put({type: 'ASYNC_LIST_CART_SUCCESS', payload: response.cart});

  } catch(error) {
    console.log(error);
    toast.error('Ocorreu um erro');
  }
}

function* asyncAddCart({payload}) {
  try {
    yield put({type: 'ASYNC_ADD_CART_SUCCESS', id: payload.id, amount: 1})
    toast.success('Item adicionado ao carrinho');
  } catch(error) {
    toast.error('Ocorreu um erro');
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
