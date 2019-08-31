// Reducers
const INITIAL_STATE = [{
    id: 1,
    amount: 10,
}];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {  
    default:
      return state;
  }
}

//   Actions
export const Creators = {
  listCart: () => ({
    type: "LIST_CART",
    payload: {}
  }),
};
