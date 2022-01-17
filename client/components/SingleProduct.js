import React from 'react'
import {connect} from 'react-redux'
import { fetchSingleProduct } from '../store/singleProduct'

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        try {
            this.props.loadSingleProduct(this.props.match.params.id); //match it to routes
        } catch(err){
            console.log('error in componentDidMount of SingleProduct component: ', err)
        }
    }
    
    render() {
        const product = this.props.product || {name: '', price: 11999, quantity: 100, description: '', imageUrl:''}
        console.log('Product: ', product)
        return (
        <div id='single-Product'>
            <h1>{product.name}</h1>
            <h3>${Math.floor(product.price/100)}.{product.price%100}</h3>
            {product.quantity > 0 ? <h3>{product.quantity} Left in Stock</h3> : <h3>Out of Stock</h3>}
            <h3>About this Item:</h3>
            <p>{product.description}</p>
            <img src={product.imageUrl} className = 'SinglePicture'/>
            <form id='Add-Cart-Form'>
            <button className='AddToCartButton' onClick={() => this.props.history.push(`/CartOrContinueShopping`)}>Add to Cart </button>
            </form>
        </div>
        )
    }
}

const mapState = (state) => {
    return {
        product: state.singleProduct,
    }
}

const mapDispatch = (dispatch, {history}) => {
    return {
        loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    }
}

export default connect(mapState, mapDispatch)(SingleProduct)