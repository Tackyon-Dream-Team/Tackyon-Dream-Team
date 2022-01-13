import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleOrder } from "../store/singleOrder";

class SingleOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.loadSingleOrder(
        this.props.match.params.id,
        this.props.match.params.orderId
      );

      console.log("Inside Component did mount: ", this.props);
    } catch (err) {
      console.log("error in componentDidMount of SingleOrder component: ", err);
    }
  }

  render() {
    const order = this.props.order;
    console.log("Order: ", order);
    return (
      <div id="single-Order">
        {order.map((product) => {
          return (
            <div key={product.id}>
              <h1>{order.name}</h1>
              <h3>
                ${Math.floor(order.price / 100)}.{order.price % 100}
              </h3>
              <h3>{order.quantity}</h3>
              <h3>About this Item:</h3>
              <p>{order.description}</p>
              <img src={order.imageUrl} className="SinglePicture" />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    order: state.singleOrder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleOrder: (id, orderId) => dispatch(getSingleOrder(id, orderId)),
  };
};

export default connect(mapState, mapDispatch)(SingleOrder);
