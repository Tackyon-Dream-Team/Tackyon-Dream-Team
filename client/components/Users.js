import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/users";

class Users extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    try {
      this.props.getUsers();
    } catch (err) {
      console.log("error in componentDidMount of Users component: ", err);
    }
  }

  render() {
    const users = this.props.users || [];
    console.log("users ", users);
    return (
      <div>
        <h1>All Active Users:</h1>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <span>
                <img src={user.imageUrl} className="SinglePicture" />
                <p>Username: {user.username}</p>
                <p>Name: {user.firstName + user.lastName}</p>
                <p>Email: {user.email}</p>
                <h4>
                  Admin: {user.admin ? <span>Yes</span> : <span>No</span>}
                </h4>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};
export default connect(mapState, mapDispatch)(Users);
