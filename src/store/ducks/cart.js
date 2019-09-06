// Reducers
const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {  
    case 'ASYNC_ADD_CART_SUCCESS':
      return [...state, { id: action.id, amount:action.amount}];
    case 'ASYNC_LIST_CART_SUCCESS':
      state = action.payload;
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
