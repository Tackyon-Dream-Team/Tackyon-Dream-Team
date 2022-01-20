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
    } catch (err) {
      console.log("error in componentDidMount of SingleOrder component: ", err);
    }
  }

  render() {
    const order = this.props.order;
    if (order.length === 0) {
      return <div>Loading...</div>;
    } else {
      const products = order[0].products;
      // console.log("!!!!!!!!", products);
      return (
        <div id="single-Order">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <h3>
                  ${Math.floor(product.price / 100)}.{product.price % 100}
                </h3>
                <h3>{product.quantity}</h3>
                <h3>About this Item:</h3>
                <p>{product.description}</p>
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
