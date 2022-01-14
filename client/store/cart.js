import axios from "axios";

const SET_CART = "SET_CART";

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

export const getCart = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/cart`);
      console.log("indside cart thunk: ", data);
      dispatch(setCart(data));
    } catch (error) {
      console.log("error in cart thunk", error);
    }
  };
};

export default function CartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
