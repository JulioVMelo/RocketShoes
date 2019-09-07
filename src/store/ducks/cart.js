// Reducers
const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {  
    case 'ASYNC_ADD_CART_SUCCESS':
      return [...state, { id: action.id, amount:action.amount}];
    case 'ASYNC_LIST_CART_SUCCESS':
      state = action.payload;
      return state;
    case 'ASYNC_INCREMENT_AMOUNT_SUCCESS':
      state.map(item => item.id === action.id ? item.amount = item.amount + 1 : item);
      return state;
    case 'ASYNC_DECREMENT_AMOUNT_SUCCESS':
      state.map(item => item.id === action.id ? item.amount = item.amount - 1 : item);
      return state;
    default:
      return state;
  }
}

//   Actions
export function listCart(){
  return {
    type: "ASYNC_LIST_CART",
    payload: {}
  }; 
};

 export function addProductToCart(id){
  return {
    type: "ASYNC_ADD_CART",
    payload: {id}
  }
};

export function incrementAmount(id) {
  return {
    type: "ASYNC_INCREMENT_AMOUNT",
    payload: {id}  
  }
};

export function decrementAmount(id) {
  return {
    type: "ASYNC_DECREMENT_AMOUNT",
    payload: {id}  
  }
};
