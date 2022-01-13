import axios from "axios";
import { Switch } from "react-router";

const SET_PRODUCTS = 'SET_PRODUCTS' ;

const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
});

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('/api/products')
            console.log('get product thunk', data)
            dispatch(setProducts(data))
        } catch (error) {
            console.log('get product thunk something wrong', error)
        }
    }
}

const intialState = [];

export default function ProductsReducer(state = intialState, action) {
    switch(action.type) {
        case SET_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}