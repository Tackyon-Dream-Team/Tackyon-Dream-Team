import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, removeCartProduct, updateProductQuantity } from "../store/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderQuantity: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {
    let tempArr = [...this.state.orderQuantity]
    tempArr[Number(event.target.name)] = Number(event.target.value)
    console.log('**handleChange** STATE.ORDERQUANTITY IS BECOMING: ', tempArr)
    this.setState({orderQuantity: tempArr})
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.updateProductQuantity(product.orderId, product.productId, Number(event.target.value))
  // }
  
  handleSubmit(orderId, productId, newQuantity) {
    return event => {
      event.preventDefault()
      console.log('**handleSubmit** SENDING OFF UPDATE PRODUCT QUANTITY WITH: ', orderId, productId, newQuantity)
      this.props.updateProductQuantity(orderId, productId, newQuantity)
    }
  }
  
  async componentDidMount() {
    try {
      await this.props.loadCart(this.props.match.params.id);
      let arrQuantities = []
      this.props.cart.forEach(element => arrQuantities.push(element.orderQuantity))
      console.log('**componentDidMount** STATE.ORDERQUANTITY IS BECOMING: ', arrQuantities)
      this.setState({orderQuantity: arrQuantities})
    } catch (err) {
      console.log("error in cart componentDidMount: ", err);
    }
  }
  
  //cart should re-render automatically on updates to store, but state needs to be updated as well
  
  render() {
    const cart = this.props.cart || [];
    const user = this.props.user || { name: "", id: 0 };
    console.log("CARTTTTTTTTTTTTTTTTTTTTTT ", cart);
    if (cart.length === 0) {
      return (
        <div>
          <h1>Your Shopping Cart is Empty</h1>
          <em>
            If you cannot place an item in your cart, your browser might not
            support cookies. 
          </em>
        </div>
      );
    } else {
      // const products = cart.products;
      //const { orderId } = cart
      // console.log("!!!!cartItems!!!!", products);
      return (
      <>  
        <h1>Your Shopping Cart</h1>
        <div id="cartItems">
          {cart.map((orderProduct, index) => {
            console.log('SHOPPING CART PRODUCT =>', orderProduct.product)
            const {name, imageUrl, price, id} = orderProduct.product
            return (
              <div key={orderProduct.productId}>
                <h1>{name}</h1>
                <h3>
                  ${Math.floor(price / 100)}.{price % 100}
                </h3>
                <div className="edit-cart">
                  <div>Quantity in cart:</div>
                  <form id="update-cart-Quantity" onSubmit={this.handleSubmit(orderProduct.orderId, id, this.state.orderQuantity[index])}>
                    <label>Update Product Quantity:</label>
                    <select name={String(index)} value={String(this.state.orderQuantity[index])} onChange={this.handleChange}>
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
                    <button type='submit'>Update Quantity</button>
                  </form>
                  <button className="remove-bttn" onClick={() => this.props.removeCartProduct(orderProduct.orderId, orderProduct.productId)}>Remove All From Cart</button>
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
          <button onClick={() => this.props.history.push(`/users/${user.id}/cart/checkout`)}>
              Proceed to checkout
            </button>
        </>
      );
    }
  }
}

const mapState = (state) => {
  console.log('<<<<<state>>>>', state)
  return {
    user: state.auth,
    cart: state.Cart,
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    loadCart: (userId) => dispatch(getCart(userId)),
    removeCartProduct: (orderId, productId) => dispatch(removeCartProduct(orderId, productId)),
    updateProductQuantity: (orderId, productId, newQuantity) => dispatch(updateProductQuantity(orderId, productId, newQuantity))
  };
};

export default connect(mapState, mapDispatch)(Cart);
//line 81 - <form id="update-cart-Quantity" onSubmit={(event, orderProduct.orderId, id, this.state.orderQuantity[index]) => this.handleSubmit(event, orderProduct.orderId, id, this.state.orderQuantity[index])}>