import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const EDIT_CART = 'EDIT_CART'

const _addToCart = (orderProduct) => {
  return {
    type: ADD_TO_CART,
    orderProduct
  }
}

const _editCart = (orderProduct) => {
  return {
    type: EDIT_CART,
    orderProduct
  }
}
/*
export const addToCart = (userId, productId, quantity, price) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/cart`)
      console.log('=======DATA FROM ATC=========', data.id, productId, quantity, price)
      
      
      const orderProduct = await axios.get(`/api/orderProducts/${data[0].id}/${productId}`)
      //console.log('======ORDER PRODUCT=======', orderProduct)
      
      if (orderProduct.length === 0) {
        console.log('++++CREATING NEW ORDER PRODUCT ROW++++++++')
        const newOrderProduct = await axios.post(`/api/users/${userId}/cart`, {orderId: data[0].id, productId: productId, orderQuantity: quantity, orderPrice: price})
        dispatch(_addToCart(newOrderProduct)) 
      } else {
        console.log('+++++EDITING EXISTING ORDER PRODUCT ROW++++++')
        const editOrderProduct = await axios.put(`/api/orderProducts/${data[0].id}/${productId}`, {orderId: data[0].id, productId: productId, orderQuantity: quantity + orderProduct.orderQuantity, orderPrice: price})
        dispatch(_editCart(editOrderProduct))
      }
    } catch(err) {
      console.log('error in addToCart', err)
    }
  }
}
*/

export const addToCart = (userId, productId, quantity, price) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/cart`)
      console.log('=========DATA FROM ATC FIRST AXIOS', data)
      
      const findOrCreate = await axios.put(`/api/orderProducts/${data.id}/${productId}`, {orderId: data.id, productId: productId, orderQuantity: quantity, orderPrice: price})
      console.log('=========DATA FROM ATC SECOND AXIOS', findOrCreate)
      
      dispatch(_editCart(findOrCreate))
    } catch(err) {
      console.log('error in addToCartThunk', err)
    }
  }
}

export default function OrderProductReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.orderProduct;
    case EDIT_CART:
      return action.orderProduct
    default:
      return state;
  }
}