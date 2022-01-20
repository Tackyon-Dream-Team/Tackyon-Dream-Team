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

  componentDidUpdate(prevProps) {
    // try {
    if (prevProps.singleProduct.id !== this.props.singleProduct.id) {
      console.log("this.props", this.props.singleProductId);
      const { name, description, imageUrl, price, quantity, category } =
        this.props.singleProduct;
      this.setState({
        name,
        description,
        imageUrl,
        price,
        quantity,
        category,
      });
    }
  }
  //   } catch (error) {
  //     console.log("error in component did mount", error);
  //   }
  // }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct(this.props.singleProduct.id, { ...this.state });
  }

  render() {
    const product = this.props.singleProduct || {
      name: "",
      description: "",
      imageUrl: "",
      price: 0,
      quantity: 0,
      category: "",
    };
    console.log("in edit product", product);
    const { name, description, imageUrl, price, quantity, category } =
      this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form onSubmit={handleSubmit} className="Headers">
          <label htmlFor="name">Name</label>
          <input name="name" onChange={handleChange} value={name} />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />
          <label htmlFor="imageUrl">Product Image Link</label>
          <input name="imageUrl" onChange={handleChange} value={imageUrl} />
          <label htmlFor="price">Price in pennies</label>
          <input name="price" onChange={handleChange} value={price} />
          <label htmlFor="quantity">Quantity</label>
          <input name="quantity" onChange={handleChange} value={quantity} />
          <label htmlFor="category">Category</label>
          <input name="category" onChange={handleChange} value={category} />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  singleProduct: state.singleProduct,
});

const mapDispatch = (dispatch) => ({
  fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  updateProduct: (productId, newProduct) =>
    dispatch(updateProduct(productId, newProduct)),
});

export default connect(mapState, mapDispatch)(EditProduct);
