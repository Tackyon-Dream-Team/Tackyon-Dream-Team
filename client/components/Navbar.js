import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

class Navbar extends React.Component {
  constructor() {
    super()
  }
  render() {
    const { isLoggedIn, handleClick } = this.props
    const { user } = this.props || {name: '', id: 0}
    return (
      <div>
        {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <h1>Welcome, {user.firstName}</h1>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <button onClick={() => this.props.history.push(`/users/${user.id}/cart`)}>View Cart</button>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          {//<button onClick={() => FINISH THIS VIEW CART BUTTON FOR GUEST USER
          }
        </div>
      )}
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => {
  console.log('-----state.auth.id-----', state.auth)
  return {
    user: state.auth,
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
