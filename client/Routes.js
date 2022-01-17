import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import { me } from "./store";

import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import SingleOrder from "./components/SingleOrder";
import AllOrders from "./components/AllOrders";
import AllProducts from "./components/AllProducts";
import CheckoutOrder from "./components/CheckoutOrder"
import Cart from './components/Cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      /*
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/users/:id/orders/:orderId/checkout" component={CheckoutOrder} />
            <Route path="/users/:id/orders/:orderId" component={SingleOrder} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/users/:id/orders" component={AllOrders} />
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={AllProducts} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
      */
      
      <div>
        {isLoggedIn ? (
          <Route path='/home' component={Home} />
        ) : (<div></div>)}
        <Switch>
          <Route exact path='/' component= {AllProducts} />
          <Route path='/products/:id' component= {SingleProduct} />
          <Route path='/users/:id/orders/:orderId' component={SingleOrder} />
          <Route path='/users/:id/orders' component={AllOrders} />
          <Route path='/users/:id/cart' component={Cart} />
          <Route path='/users/:id/cart/checkout' component={CheckoutOrder} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
