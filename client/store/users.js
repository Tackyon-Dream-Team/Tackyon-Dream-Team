import axios from "axios";

const SET_USERS = "SET_USERS";

const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/users/all");
      dispatch(setUsers(data));
      console.log("users data: ", data);
    } catch (error) {
      console.log("get users thunk something wrong", error);
    }
  };
};

const intialState = [];

export default function usersReducer(state = intialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}
