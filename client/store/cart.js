import axios from "axios";

const SET_CART = "SET_CART";
const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT"

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

const _removeCartProduct = (product) => {
  return {
    type: REMOVE_CART_PRODUCT,
    product
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

export const removeCartProduct = (id, productId, orderProductId ) => {
  return async (dispatch) => {
    try {
      // console.log('jjjjjjj', productId)
      const { data } = await axios.delete(`/api/users/${id}/cart/${productId}/${orderProductId}`);
      console.log("inside removeCartItem thunk: ", data);
      dispatch(_removeCartProduct(data));
    } catch (error) {
      console.log("error in REMOVE_CART_PRODUCT thunk", error);
    }
  };
}

export default function CartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case REMOVE_CART_PRODUCT:
      return state.cart[0].products.filter(product => product.id !== action.product.id )
    default:
      return state;
  }
}
