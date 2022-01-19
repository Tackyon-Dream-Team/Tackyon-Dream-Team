import axios from "axios";

const SET_PRODUCTS = "SET_PRODUCTS";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

const _removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId,
});

const _createProduct = (product) => ({
  type: CREATE_PRODUCT,
  product,
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch(setProducts(data));
    } catch (error) {
      console.log("get product thunk something wrong", error);
    }
  };
};

// export const removeProduct = (productId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.delete(`/api/products/${productId}`);
//       console.log("removeProduct Data: ", data);
//       dispatch(_removeProduct(data));
//     } catch (error) {
//       console.log("error in removeProduct thunk: ", error);
//     }
//   };
// };

export const removeProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      dispatch(_removeProduct(productId));
    } catch (error) {
      console.log("error in removeProduct thunk: ", error);
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/products", product);
      console.log("!!!!!!!!", data);
      dispatch(_createProduct(data));
    } catch (error) {
      console.log("error in createProduct thunk", error);
    }
  };
};

const intialState = [];

export default function ProductsReducer(state = intialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case REMOVE_PRODUCT:
      return state.filter((product) => {
        return product.id !== action.productId;
      });
    case CREATE_PRODUCT:
      return [...state, action.product];
    default:
      return state;
  }
}
