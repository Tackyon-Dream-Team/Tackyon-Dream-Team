import React from 'react'
import {connect} from 'react-redux'
import { getProducts } from '../store/Products'

const AllProducts = (props) => {
     const allProducts = props.products
     console.log('allproducts-----', props)
    return (
        <div>
            {allProducts.map(product => 
                <div key={product.id} className = "product" >
                    <h3>{product.name}</h3>
                    <img src={product.imageUrl} />
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <br />
                </div>)}
        </div>
    )
}
// class AllProducts extends React.Component {
    
//     componentDidMount() {
//         console.log('component did mount all products');
//         this.props.loadproducts()
//     }

//     render() {
//         console.log('allproducts props', this.props)
//         return (
//             <div>
//                 {allProducts.map(product => 
//                     <div key={product.id} className = "product" >
//                         <h3>{product.name}</h3>
//                         <img src={product.imageUrl} />
//                         <p>{product.price}</p>
//                         <p>{product.description}</p>
//                         <br />
//                     </div>)}
//             </div>
//         )
//     }
    
// }

const mapState = (state) => {
    return {
        products: state.products
    }
};

const mapDispatch = (dispatch) => {
    loadproducts: () => dispatch(getProducts())
}
 

export default connect(mapState, mapDispatch)(AllProducts)