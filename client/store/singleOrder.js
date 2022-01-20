import axios from "axios";

const SET_SINGLE_ORDER = "SET_SINGLE_ORDER";
const SET_CART_DETAILS = "SET_CART_DETAILS"

export const setSingleOrder = (order) => {
  return {
    type: SET_SINGLE_ORDER,
    order,
  };
};

export const setCartDetails = (cartDetails) => {
  return {
    type: SET_CART_DETAILS,
    cartDetails,
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

export const getcart = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/cart`);
      console.log("inside getcart thunk: ", data);
      dispatch(setCartDetails(data));
    } catch (error) {
      console.log("error in singleOrder", error);
    }
  };
};

export default function singleOrderReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_ORDER:
      return action.order;
    case SET_CART_DETAILS:
      return action.cartDetails;
    default:
      return state;
  }
}
