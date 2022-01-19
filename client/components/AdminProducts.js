import React from "react";
import { connect } from "react-redux";
import { getProducts, removeProduct } from "../store/Products";
import { Link } from "react-router-dom";

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
                <Link to={`/products/edit/${product.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => this.props.removeProduct(product.id)}>
                  Delete
                </button>
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
    removeProduct: (product) => dispatch(removeProduct(product)),
  };
};
export default connect(mapState, mapDispatch)(AdminProducts);
