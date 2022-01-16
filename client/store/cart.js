import axios from "axios";

const SET_CART = "SET_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

const _removeCartItem = (cartItem) => {
  return {
    type: REMOVE_CART_ITEM,
    cartItem
  }
}

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

export const removeCartItem = (id, productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/users/${id}/cart/${productId}`);
      console.log("inside removeCartItem thunk: ", data);
      dispatch(_removeCartItem(data));
    } catch (error) {
      console.log("error in removeCartItem thunk", error);
    }
  };
}

export default function CartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
