import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store/Orders'

class AllOrders extends React.Component {
    componentDidMount() {
        try {
            this.props.fetchOrders(this.props.match.params.id)
        } catch(err) {
            console.log('error in componentDidMount of AllOrders component: ', err)
        }
    }
    
    render() {
        const orders = this.props.orders || []
        console.log('++++++++++++++++++++++', this.props)
        return <div>
            <h1>Order History</h1>
            {orders.length === 0 ? 
            (
                <div>
                    <h1>No placed orders</h1>
                </div>
            ):
            (
                <div>
                    {orders.map((order) => {
                        console.log('=========================', order.products)
                        return (
                            <div key={order.id}>
                                <h1>Order Placed: {order.updatedAt}</h1>
                                {order.products.map((item) => {
                                    return (
                                        <div>
                                            <h3>{item.name}</h3>
                                            <h3>{item.orderProduct.orderQuantity}</h3>
                                            <h3>{item.orderProduct.orderPrice}</h3>
                                            <img src={item.imageUrl} className = 'SinglePicture'/>
                                        </div>
                                    )
                                })}
                                <button onClick={() => this.props.history.push(`/orders/${order.id}`)}>View Details</button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    }
}

const mapState = (state) => {
    console.log('====STATE====', state)
    return {
        orders: state.Orders
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchOrders: (id) => dispatch(fetchOrders(id))
    }
}

export default connect(mapState, mapDispatch)(AllOrders)