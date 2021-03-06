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
      category: "None",
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
    // console.log("spread of state in submit: ", { ...this.state });
    this.props.createProduct({ ...this.state });
    this.props.history.push(`/users/${this.props.user.id}/admin`);
  }

  render() {
    const { name, description, price, quantity, category, imageUrl } =
      this.state;
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
        {/* <input name="category" onChange={changeHandler} value={category} /> */}
        <select name="category" onChange={changeHandler} value={category}>
          <option value="None">None</option>
          <option value="Electronics">Electronics</option>
          <option value="Shoes">Shoes</option>
          <option value="Jackets">Jackets</option>
          <option value="Sporting Equipment">Sporting Equipment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <label htmlFor="imageUrl">Product Image</label>
        <input name="imageUrl" onChange={changeHandler} value={imageUrl} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(createProduct(product, history)),
});

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapState, mapDispatch)(NewProduct);
