import axios from "axios";
import history from "../history";
import { addToCart } from './orderProduct'
const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";
//const SET_NEW_USER = "SET_NEW_USER";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });
//const setNewUser = (auth) => ({ type: SET_NEW_USER, auth });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    //console.log('=============LOOK HERE===========', res.data.id)
    //const { data } = await axios.get(`api/users/${res.data.id}/cart`)
    //console.log('=========ID==========', data.id)
    let localCart = window.localStorage.getItem('guestCart')
    if (localCart) {
      localCart = JSON.parse(localCart)
      await localCart.forEach((op) => {
        console.log('WHOOOPEEE OVER HERE', dispatch(addToCart(res.data.id, op.productId, op.orderQuantity, op.orderPrice)))
      })
      window.localStorage.removeItem('guestCart')
    }
    history.push("/");
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, { username, password });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const authenticateSignUp = (username, password, firstName, lastName, email, imageUrl) =>
  async (dispatch) => {
    try {
      const res = await axios.post(`/auth/signup`, {username, password, firstName, lastName, email, imageUrl})
      window.localStorage.setItem(TOKEN, res.data.token)
      dispatch(me())
    } catch(err) {
      return dispatch(setAuth({error: err}))
    }
  }


export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push("/");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    // case SET_NEW_USER:
    //   return action.auth;
    default:
      return state;
  }
}
