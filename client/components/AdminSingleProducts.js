import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

class AdminSingleProduct extends React.Component {
  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.id);
    } catch (err) {
      console.log(
        "error in componentDidMount of AdminSingleProduct component: ",
        err
      );
    }
  }

  render() {
    const product = this.props.product;
    console.log("!!!!!", product);
    return (
      <div id="single-Product">
        <h1>Name: {product.name}</h1>
        <h3>Price: {product.price}</h3>
        <h3>Quantity: {product.quantity}</h3>
        <p>Description: {product.description}</p>
        <img src={product.imageUrl} className="SinglePicture" />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    product: state.singleProduct,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(AdminSingleProduct);
