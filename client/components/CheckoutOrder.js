import React from "react";
import { connect } from "react-redux";
import { getCart } from "../store/cart";
import { getSingleOrder, updateCartStatus } from "../store/singleOrder";

class CheckoutOrder extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    try {
      this.props.loadSingleOrder(
        this.props.match.params.id,
      );
      // this.props.loadCartDetails(this.props.match.params.id)
    } catch (err) {
      console.log(
        "error in componentDidMount of CheckoutOrder component: ",
        err
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateCartStatus(this.props.user.id, this.props.cart[0].orderId)
    console.log('handleeeeeeeeeeeeee', this.props)
    const user = this.props.user
    this.props.history.push(`/users/${user.id}/orders`)


  }

  render() {
    const cart = this.props.cart || [];
    const user = this.props.user || {name: '', id: 0}
    console.log('ooooooooo', cart)
    if (cart.length === 0) {
      return <div>Loading...</div>;
    } else {
      // const products = order[0].products;
      return (
        <>
          <div id="single-Order">
            <h1>Checkout</h1>
            {cart.map((product) => {
            console.log('OOOOOOOOOOOOOOoooooooooooooooooooooooooo', product.product)
            console.log('-----cartProduct------', product)
            const {name, imageUrl, price} = product.product;
            return (
              <div key={product.productId}>
                <h1>{name}</h1>
                <h3>
                  ${Math.floor(price / 100)}.{price % 100}
                </h3>
                <div>{product.orderQuantity}</div>
                <div>
                  Product Total: $ {Math.floor((price * product.orderQuantity)/100)}.{price * product.orderQuantity  % 100}
                </div>
                <img src={imageUrl} className="SinglePicture" />
              </div>
            );
          })}
            {/* {order.map((product) => {
              const {name, imageUrl, price} = product.product;

              return (
                <div key={product.productId}>
                  <h1>{product.name}</h1>
                  <h3>
                    {" "}
                    Price: ${Math.floor(product.price / 100)}.
                    {product.price % 100}
                  </h3>
                  <h3>{product.quantity}</h3>
                  <img src={product.imageUrl} className="SinglePicture" />
                </div>
              );
            })} */}
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
            <form onSubmit={this.handleSubmit}>
              <button className="checkout-bttn" type="submit">
                Checkout
              </button>
            </form>           
          </div>
        </>
      );
    }
  }
}

const mapState = (state) => {
  console.log("====STATE====", state);
  return {
    user: state.auth,
    cart: state.singleOrder,
    
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleOrder: (id, orderId) => dispatch(getSingleOrder(id, orderId)),
    updateCartStatus: (id, orderId) => dispatch(updateCartStatus(id, orderId))
  };
};

export default connect(mapState, mapDispatch)(CheckoutOrder);
