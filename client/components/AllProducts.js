import React from "react";
import { connect } from "react-redux";
import { getProducts } from '../store/Products'

class AllProducts extends React.Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
    try {
      console.log('Trying to get products')
      this.props.getProducts()
      console.log('Got products')
    } catch(err) {
      console.log('error in componentDidMount of AllProducts component: ', err)
    }
  }
  
  render() {
    
    const products = this.props.products || []
    console.log('=================products==========', products)
    return (
    <div>
      {products.map((product) => {
        return (
        <div key={product.id} className='product'>
          <h1>{product.name}</h1>
          <h3>${Math.floor(product.price/100)}.{product.price%100}</h3>
          <img src={product.imageUrl} className = 'SinglePicture'/>
        </div>
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
