import axios from "axios";

const SET_SINGLE_ORDER = "SET_SINGLE_ORDER";
const UPDATE_CART_STATUS ='UPDATE_CART_STATUS'

export const setSingleOrder = (order) => {
  return {
    type: SET_SINGLE_ORDER,
    order,
  };
};

export const _updateCartStatus = (cart) => {
  return {
    type: UPDATE_CART_STATUS,
    cart,
  };
};

export const getSingleOrder = (id, orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/cartItems`);
      console.log("inside singleOrder thunk: ", data);
      dispatch(setSingleOrder(data));
    } catch (error) {
      console.log("error in singleOrder", error);
    }
  };
};

export const updateCartStatus = (id, orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/orders/${orderId}`);
      console.log("inside UPDATE STATUS thunk: ", data);
      
      data.activeOrder = 'Completed'
      const updatedCartStatus = await axios.put(`/api/users/${id}/orders/${orderId}`, data)
      console.log("OUR NEXT LOG", updatedCartStatus)
      dispatch(_updateCartStatus(updatedCartStatus));
    } catch (error) {
      console.log("error in UPDATE CART STATUS", error);
    }
  };
};

export default function singleOrderReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_ORDER:
      return action.order;
    case UPDATE_CART_STATUS:
      return action.cart;
    default:
      return state;
  }
}
