import React from "react";
import { connect } from "react-redux";
import { getSingleOrder } from "../store/singleOrder";

class CheckoutOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.loadSingleOrder(
        this.props.match.params.id,
        this.props.match.params.orderId
      );
    } catch (err) {
      console.log(
        "error in componentDidMount of CheckoutOrder component: ",
        err
      );
    }
  }

  render() {
    const order = this.props.checkout;

    if (order.length === 0) {
      return <div>Loading...</div>;
    } else {
      const products = order[0].products;
      return (
        <div id="single-Order">
          <h1>Checkout</h1>
          <h3>Order Placed: {order.updatedAt}</h3>
          {products.map((product) => {
            return (
              <div key={product.id}>
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
          })}
        </div>
      );
    }
  }
}

const mapState = (state) => {
  console.log("====STATE====", state);
  return {
    checkout: state.singleOrder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleOrder: (id, orderId) => dispatch(getSingleOrder(id, orderId)),
  };
};

export default connect(mapState, mapDispatch)(CheckoutOrder);
