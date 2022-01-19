import React from 'react'
import {connect} from 'react-redux'
import { fetchSingleProduct, decreaseStock } from '../store/singleProduct'
import { addToCart } from '../store/orderProduct'

const initState = {
    quantity: 1,
    productId: 0,
    price: 0,
    selectQuantity: '1'
}

class SingleProduct extends React.Component {
    constructor(props) {
        super();
        this.state = initState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event, productId) {
        if (Object.keys(this.props.user).length > 0) {
            event.preventDefault()
            //console.log('======handlesubmit=======', this.props.user.id, this.state.productId, this.state.quantity, this.state.price)
            this.props.addToCart(this.props.user.id, this.state.productId, this.state.quantity, this.state.price)
            this.props.decreaseStock(this.state.productId, this.state.quantity)
            this.setState(initState)
            this.props.history.push(`/users/${this.props.user.id}/cart`)    
        } else {
            let localCart = window.localStorage.getItem('guestCart')
            localCart = localCart ? JSON.parse(localCart) : []
            localCart.push({orderId: 0, productId: this.state.productId, orderQuantity: this.state.quantity, orderPrice: this.state.price})
            window.localStorage.setItem('guestCart', JSON.stringify(localCart))
        }
    }
    
    async componentDidMount() {
        try {
            await this.props.loadSingleProduct(this.props.match.params.id); //match it to routes
            console.log('COMPONENT DID MOUNT', this.props)
            this.setState({productId: this.props.product.id, price: this.props.product.price})
        } catch(err){
            console.log('error in componentDidMount of SingleProduct component: ', err)
        }
    }
    
    handleChange(event) {
        if (Number(event.target.value) > this.props.product.quantity) {
            alert(`Only ${this.props.product.quantity} left in stock`)
            this.setState({quantity: this.props.product.quantity, selectQuantity: String(this.props.product.quantity)})
        } else {
            this.setState({quantity: Number(event.target.value), selectQuantity: event.target.value})
        }
    }
    
    render() {
        const product = this.props.product || {id: 0, name: '', price: 11999, quantity: 100, description: '', imageUrl:''}
        console.log('=====props=====', this.props)
        return (
        <div id='single-Product'>
            <h1>{product.name}</h1>
            <h3>${Math.floor(product.price/100)}.{product.price%100}</h3>
            {product.quantity > 0 ? <h3>{product.quantity} Left in Stock</h3> : <h3>Out of Stock</h3>}
            <h3>About this Item:</h3>
            <p>{product.description}</p>
            <img src={product.imageUrl} className = 'SinglePicture'/>
            <form id='Add-Cart-Form' onSubmit={this.handleSubmit}>
                <label>Quantity: </label>
                <select name='selectQuantity' onChange={this.handleChange} value={this.state.selectQuantity}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
                <button className='AddToCartButton' type='submit'>Add to Cart </button>
            </form>
        </div>
        )
    }
}

const mapState = (state) => {
    console.log('======userSP=====', state.auth)
    console.log(Object.keys(state.auth).length)
    return {
        user: state.auth,
        product: state.singleProduct,
    }
}

const mapDispatch = (dispatch, {history}) => {
    return {
        loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
        addToCart: (userId, productId, quantity, price) => dispatch(addToCart(userId, productId, quantity, price)),
        decreaseStock: (productId, decrement) => dispatch(decreaseStock(productId, decrement))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct)