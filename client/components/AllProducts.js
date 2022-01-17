import React from "react";
import { connect } from "react-redux";
import { getProducts } from '../store/Products'
import { Link } from 'react-router-dom'

class AllProducts extends React.Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
    try {
      this.props.getProducts()
    } catch(err) {
      console.log('error in componentDidMount of AllProducts component: ', err)
    }
  }
  
  render() {
    
    const products = this.props.products || []
    return (
    <div>
      {products.map((product) => {
        return (
        <Link to={`/products/${product.id}`} key={product.id} className='product'>
          <h1>{product.name}</h1>
          <h3>${Math.floor(product.price/100)}.{product.price%100}</h3>
          <img src={product.imageUrl} className = 'SinglePicture'/>
        </Link>
        )
      })}
    </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}
export default connect(mapState, mapDispatch)(AllProducts);
