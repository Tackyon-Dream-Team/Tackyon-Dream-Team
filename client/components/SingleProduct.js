import React from 'react'
import {connect} from 'react-redux'


class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        try {
            this.props.loadSingleProduct(this.props.match.params.productId);//match it to routes
        } catch(err){
            console.log('error in componentDidMount of SingleProduct ocmponent: ', err)
        }
    }
    
    render() {
        const product = this.props.product
        return (
        <div id='single-Product'>
            <h1>{product.name}</h1>
            <h3>${Math.floor(product.price/100)}.{product.price%100}</h3>
            <h3>{product.quantity} Left in Stock</h3>
            <h3>About this Item:</h3>
            <p>{product.description}</p>
            <img src={product.imageUrl} className = 'SinglePicture'/>
            <form id='Add-Cart-Form'>
            <button>Add to Cart </button>
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