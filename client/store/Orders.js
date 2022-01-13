import axios from 'axios'

const SET_ORDERS = 'GET_ORDERS'

const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        orders
    }
}

export const fetchOrders = (id) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/api/users/${id}/orders`)
        dispatch(setOrders(data))
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case SET_ORDERS:
            return action.orders
        default:
            return state
    }
}