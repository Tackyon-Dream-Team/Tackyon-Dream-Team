import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, removeCartProduct, increaseProductQuantity } from "../store/cart";


class Cart extends React.Component {
  constructor(props) {
    super(props);
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
      
    const cart = this.props.cart || [];
    console.log('render cart ' , cart)
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
            console.log('-----------', product)
            return (
              <div key={product.productId}>
                <h1>{name}</h1>
                <h3>
                  ${Math.floor(price / 100)}.{price % 100}
                </h3>
                <div className="edit-cart">
                  <form onSubmit={(ev) => ev.preventDefault()}>
                    <button name="decr-bttn">-</button>
                  </form>
                  <div>{product.orderQuantity}</div>
                  <form onSubmit={(ev) => ev.preventDefault()}>
                    <button className="incr-bttn" onClick={() => this.props.increaseProductQuantity(userId, product.id)}>+</button>
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
    increaseProductQuantity: (id, productId) => dispatch(increaseProductQuantity(id, productId, history))
  };
};

export default connect(mapState, mapDispatch)(Cart);
