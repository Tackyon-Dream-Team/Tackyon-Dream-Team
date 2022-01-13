import axios from "axios";

const SET_SINGLE_ORDER = "SET_SINGLE_ORDER";

export const setSingleOrder = (order) => {
  return {
    type: SET_SINGLE_ORDER,
    order,
  };
};

export const getSingleOrder = (id, orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/orders/${orderId}`);
      console.log("indside singleOrder thunk: ", data);
      dispatch(setSingleOrder(data));
    } catch (error) {
      console.log("error in singleOrder", error);
    }
  };
};

export default function singleOrderReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_ORDER:
      return action.order;
    default:
      return state;
  }
}
