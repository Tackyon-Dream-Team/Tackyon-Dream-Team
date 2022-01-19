import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../store/Products";

class AdminProducts extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    try {
      this.props.getProducts();
    } catch (err) {
      console.log(
        "error in componentDidMount of adminProducts component: ",
        err
      );
    }
  }

  render() {
    const products = this.props.products || [];
    return (
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <h3>
                {" "}
                Price: ${Math.floor(product.price / 100)}.{product.price % 100}
              </h3>
              <p>Description: {product.description}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Category: {product.category}</p>
              <img src={product.imageUrl} className="SinglePicture" />
              <span>
                <button>Edit</button>
                <button>Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};
export default connect(mapState, mapDispatch)(AdminProducts);
