import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleOrder } from "../store/singleOrder";
import { getCart } from "../store/cart";


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
      const products = cart[0].products;
      // console.log("!!!!cartItems!!!!", products);
      return (
      <>  
        <h1>Your Shopping Cart</h1>
        <div id="cartItems">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <h3>
                  ${Math.floor(product.price / 100)}.{product.price % 100}
                </h3>
                <div className="edit-cart">
                  <button name="incr-bttn">-</button>
                  <span>{product.quantity}</span>
                  <button name="decr-bttn">+</button>
                  <form>
                    <button className="remove-bttn" onClick={() => this.props.deleteProduct(product.id)}>remove</button>
                  </form>
                </div>
                <img src={product.imageUrl} className="SinglePicture" />
              </div>
            );
          })}
        </div>
        <div id="Order-summary">
          <div id="total">
            Subtotal ({ products.map(product => product.quantity)
                .reduce((acum, currVal) => acum + currVal)} item(s)): $
              {
                products.map(product => product.price * product.quantity)
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
  return {
    cart: state.Cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCart: (id) => dispatch(getCart(id)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
