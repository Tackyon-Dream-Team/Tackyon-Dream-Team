import axios from "axios";

const SET_CART = "SET_CART";
const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT"
const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

const _removeCartProduct = (product) => {
  return {
    type: REMOVE_CART_PRODUCT,
    product,
  };
};

const _updateProductQuantity = (product) => {
  console.log('&&&&&&&&&&&&&&&&&&&&*********', product)
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    product
  }
}

export const getCart = (id) => {
  return async (dispatch) => {
    try {
      const { data: orderProducts } = await axios.get(`/api/users/${id}/cartItems`);
      console.log("GET CART THUNK: orderProducts", orderProducts);
      dispatch(setCart(orderProducts));
    } catch (error) {
      console.log("error in cart thunk", error);
    }
  };
};

export const removeCartProduct = (orderId, productId) => {
  return async (dispatch) => {
    try {
      // console.log('jjjjjjj', productId)
      const { data } = await axios.delete(`/api/users/${orderId}/cart/${productId}`);
      console.log("inside removeCartItem thunk: ", data);
      dispatch(_removeCartProduct(data.productId));
      //history.push(`/users/${id}/cart`)
    } catch (error) {
      console.log("error in REMOVE_CART_PRODUCT thunk", error);
    }
  };
};

export const updateProductQuantity = (orderId, productId, newQuantity) => {
  return async (dispatch) => {
    try {
      let {data} = await axios.get(`/api/users/${orderId}/${productId}`)
      console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', data)

      data.orderQuantity = newQuantity;
      const updatedCartProduct = await axios.put(`/api/users/${orderId}/cart/${productId}`, data)
      console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',updatedCartProduct)
      dispatch(_updateProductQuantity(updatedCartProduct))
    } catch(err) {
      console.log("error in UPDATE_PRODUCT_QUANTITY thunk", err);
    }
  }
}

export default function CartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case REMOVE_CART_PRODUCT:
      return state.filter((product) => product.productId !== action.product )
    case UPDATE_PRODUCT_QUANTITY:
      //return state
      return state.map((product) => product.productId === action.product.productId ? action.product: product)
    default:
      return state;
  }
}
