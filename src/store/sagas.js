import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../services/api';

function* asyncListProducts() {
  try {
    const response = yield call(api.get, '/products');
    yield put({ type: 'ASYNC_LIST_PRODUCTS_SUCCESS', payload: response.data })

  } catch(error){
    console.log(error);
  }
  
}
export default function* root() {
  yield all([
    takeLatest('ASYNC_LIST_PRODUCTS', asyncListProducts)
  ]);
}
