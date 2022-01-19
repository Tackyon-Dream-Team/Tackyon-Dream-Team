import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, removeCartProduct, updateProductQuantity } from "../store/cart";


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cart || []
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(product, event) {
    console.log('event.target.value', event.target.value)
    console.log('handlechgange product', product)
    // this.setState([...this.cart, orderQuantity: {orderQuantity: event.target.value}])
    const tempState = this.state
    const result = tempState.map(cartItem => cartItem.productId === product.productId ? cartItem.orderQuantity = event.target.value : cartItem)
    this.setState(result)
    // if(Number(event.target.value) > )
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your updated quantity is: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    try {

      this.props.loadCart(
        this.props.match.params.id,
      );
      console.log("cart Component did mount: ", this.props);
    } catch (err) {

      console.log("error in cart componentDidMount: ", err);
    }
  }

  

  render() {
      
    const cart = this.props.cart;
    console.log('render cart!!!! ' , cart)
    if (cart.length === 0) {
      return (
      <div>
        <h1>Your Shopping Cart is Empty</h1>
        <em>If you cannot place an item in your cart, your browser might not support cookies. Learn more</em>
      </div>)
    } else {
      // const products = cart.products;
      const userId = cart.userId
      // console.log("!!!!cartItems!!!!", products);
      return (
      <>  
        <h1>Your Shopping Cart</h1>
        <div id="cartItems">
          {cart.map((product) => {
            const {name, imageUrl, price} = product.product;
            console.log('-----cartProduct------', product)
            return (
              <div key={product.productId}>
                <h1>{name}</h1>
                <h3>
                  ${Math.floor(price / 100)}.{price % 100}
                </h3>
                <div className="edit-cart">
                  <div>{product.orderQuantity}</div>
                  <form id="update-cart-Quantity" onSubmit={this.handleSubmit}>
                    <label>Choose a cart Item:</label>
                    <select value={product.orderQuantity} onChange={(event) => this.handleChange(product, event)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <input type="submit" />
                  </form>
                  <form onSubmit={(ev) => ev.preventDefault()}>
                    <button className="remove-bttn" onClick={() => this.props.removeCartProduct(userId, product.id)}>remove</button>
                  </form>
                </div>
                <img src={imageUrl} className="SinglePicture" />
              </div>
            );
          })}
        </div>
        <div id="Order-summary">
          <div id="total">
            Subtotal ({ cart.map(product => product.orderQuantity)
                .reduce((acum, currVal) => acum + currVal)} item(s)): $
              {
                cart.map(product => product.product.price * product.orderQuantity)
                .reduce((acum, currVal) => acum + currVal)/100
                
              }
            </div>
        </div>
        <button>Proceed to checkout</button>

      </>  
    
      );
    }
  }
}


const mapState = (state) => {
  console.log('<<<<<state>>>>', state)
  return {
    cart: state.Cart,
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    loadCart: (id) => dispatch(getCart(id)),
    removeCartProduct: (id, productId) => dispatch(removeCartProduct(id, productId, history)),
    updateProductQuantity: (id, productId) => dispatch(updateProductQuantity(id, productId, history))
  };
};

export default connect(mapState, mapDispatch)(Cart);
