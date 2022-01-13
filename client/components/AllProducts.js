import React from "react";
import { connect } from "react-redux";

const AllProducts = (props) => {
  const allProducts = props.products;
  console.log("allproducts-----", props);
  return (
    <div>
      {allProducts.map((product) => (
        <div key={product.id} className="product" align="center">
          <h3>{product.name}</h3>
          <img src={product.imageUrl} />
          <p>{"$" + product.price * 0.01}</p>
          <p>{product.description}</p>
          <button>Add To Cart</button>
          <br />
        </div>
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapState)(AllProducts);
