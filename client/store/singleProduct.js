import axios from 'axios'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

export const setSingleProduct = (product) => {
    return {
        type: SET_SINGLE_PRODUCT,
        product
    }
}

export const fetchSingleProduct = (id) => {
    return async (dispatch) => {
        try{
            const response = await axios.get(`/api/products/${id}`)
            const productData = response.data;
            dispatch(setSingleProduct(productData))
        } catch (err){
            //console.log('Error in fetchSingleProduct: ', err, id)
            console.log('Error in fetchSingleProduct: ', id)
        }
    }
}

// const initialState = {
//     singleProduct: {},
// }

export default function singleProductReducer(state = {}, action){
    switch (action.type){
        case SET_SINGLE_PRODUCT: 
            return action.product
        default:
            return state
    }
}