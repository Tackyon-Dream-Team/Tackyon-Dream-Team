import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../store/Products";

class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  submitHandler(evt) {
    evt.preventDefault();
    this.props.createProduct({ ...this.state });
  }

  render() {
    const { name, description, price, quantity, category } = this.state;
    const { changeHandler, submitHandler } = this;

    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input name="name" onChange={changeHandler} value={name} />
        <label htmlFor="description">Description</label>
        <input
          name="description"
          onChange={changeHandler}
          value={description}
        />
        <label htmlFor="price">Price</label>
        <input name="price" onChange={changeHandler} value={price} />
        <label htmlFor="quantity">Quantity</label>
        <input name="quantity" onChange={changeHandler} value={quantity} />
        <label htmlFor="category">Category</label>
        <input name="category" onChange={changeHandler} value={category} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(createProduct(product, history)),
});
export default connect(null, mapDispatch)(NewProduct);
