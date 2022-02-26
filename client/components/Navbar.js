import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { isLoggedIn, handleClick } = this.props;
    const { user } = this.props || {};
    return (
      <>
      <nav className="navbar" >
        <div className="nav" >
        <img src="logo.png" className="brand-logo" alt="logo" />
        <div className="nav-items">
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <button
              onClick={() => this.props.history.push(`/users/${user.id}/cart`)}
            >
              View Cart
            </button>
            {user.admin === true ? (
              <button
                onClick={() =>
                  this.props.history.push(`/users/${user.id}/admin`)
                }
              >
                Admin
              </button>

            ) : (
              <div />
            )}
                          <h1 align="center" id="welcome">Welcome, {user.firstName}</h1>

          </div>
        ) : (
          <div id="loginLinks">
            {/* The navbar will show these links before you log in */}
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <button onClick={() => {
              window.alert('Please Log In or Sign Up to view your cart')
            }}>View Cart</button>
            </div>
            
          </div>
        )}
        </div>
        </div>
      </nav>
      <ul className="links-container">
            <li className="link-item"><a href="#" className="link">home</a></li>
            <li className="link-item"><a href="#" className="link">women</a></li>
            <li className="link-item"><a href="#" className="link">men</a></li>
            <li className="link-item"><a href="#" className="link">kids</a></li>
            <li className="link-item"><a href="#" className="link">camp & hike</a></li>
            <li className="link-item"><a href="#" className="link">climb</a></li>

        </ul>
      </>

    );
  }
}
/***
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.auth,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
