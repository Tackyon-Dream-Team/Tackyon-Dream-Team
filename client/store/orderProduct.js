import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'

const _addToCart = (orderProduct) => {
  return {
    type: ADD_TO_CART,
    orderProduct
  }
}

export const addToCart = (userId, productId, quantity, price) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/cart`)
      console.log('=======DATA FROM ATC=========', data[0].id, productId, quantity, price)
      const newOrderProduct = await axios.post(`/api/users/${userId}/cart`, {orderId: data[0].id, productId: productId, orderQuantity: quantity, orderPrice: price})
      dispatch(_addToCart(newOrderProduct))
    } catch(err) {
      console.log('error in addToCart', err)
    }
  }
}

export default function OrderProductReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.orderProduct;
    default:
      return state;
  }
}