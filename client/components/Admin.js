import React from "react";
import { connect } from "react-redux";
import AdminProducts from "./AdminProducts";
import Users from "./Users";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}!</h3>
      <AdminProducts />
      <br />
      <button onClick={() => props.history.push("/users/newproduct")}>
        Add New Product
      </button>
      <Users />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
