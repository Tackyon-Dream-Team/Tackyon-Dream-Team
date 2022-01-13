import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store/orders'

class AllOrders extends React.Component {
    componentDidMount() {
        this.props.fetchOrders()
    }
    
    render() {
        const orders = this.props.orders || []
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
                        return (
                            <div key={order.id}>
                                <h1>Order Placed: {order.updatedAt}</h1>
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
    return {
        orders: state.orders
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}

export default connect(mapState, mapDispatch)(AllOrders)