import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProduct } from "../store/singleProduct";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imageUrl: "",
      price: "",
      quantity: "",
      category: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct({ ...this.props.product, ...this.state });
  }

  render() {
    const { name, description, imageUrl, price, quantity, category } =
      this.state;
    // console.log("!!!!!!state", this.state);
    const { handleSubmit, handleChange } = this;
    if (!this.state) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <form onSubmit={handleSubmit} className="Headers">
          <label htmlFor="name">Name</label>
          <br />
          <input name="name" onChange={handleChange} value={name} />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />
          <br />
          <label htmlFor="imageUrl">Product Image Link</label>
          <br />
          <input name="imageUrl" onChange={handleChange} value={imageUrl} />
          <br />
          <label htmlFor="price">Price in pennies</label>
          <br />
          <input name="price" onChange={handleChange} value={price} />
          <br />
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input name="quantity" onChange={handleChange} value={quantity} />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input name="category" onChange={handleChange} value={category} />
          <br />
          <br />
          <button type="submit" className="submit">
            Submit
          </button>
          <br />
        </form>
      </div>
    );
  }
}

const mapState = ({ product }) => ({
  product,
});

const mapDispatch = (dispatch, { history }) => ({
  fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  updateProduct: (product) => dispatch(updateProduct(product, history)),
});

export default connect(mapState, mapDispatch)(EditProduct);
