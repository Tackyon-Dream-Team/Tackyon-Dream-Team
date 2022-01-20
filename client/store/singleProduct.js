import axios from "axios";

const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

export const _updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      const productData = response.data;
      dispatch(setSingleProduct(productData));
    } catch (err) {
      //console.log('Error in fetchSingleProduct: ', err, id)
      console.log("Error in fetchSingleProduct: ", id);
    }
  };
};

export const updateProduct = (productId, newProduct) => {
  return async (dispatch) => {
    try {
      const i = productId;
      console.log("productid and newProduct", productId, newProduct);
      const { data } = await axios.put(`/api/products/${i}`, newProduct);
      console.log("inside updateproduct thunk data:", data);
      dispatch(_updateProduct(data));
    } catch (error) {
      console.log("error in update product thunk ", error);
    }
  };
};

export const decreaseStock = (productId, decrement) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/products/decrement/${productId}`, {
        decrement: decrement,
      });
      // console.log('=====DATA FROM DECREASE STOCK====', data)
      dispatch(setSingleProduct(data));
    } catch (err) {
      console.log("Error in decreaseStock: ", err);
    }
  };
};

// const initialState = {
//     singleProduct: {},
// }

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
