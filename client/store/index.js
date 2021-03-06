import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsReducer from "./Products";
import auth from "./auth";
import singleProductReducer from "./singleProduct";
import singleOrderReducer from "./singleOrder";
import CartReducer from "./cart";
import Orders from "./Orders";
import usersReducer from "./users";

const reducer = combineReducers({
  auth,
  products: ProductsReducer,
  singleProduct: singleProductReducer,
  singleOrder: singleOrderReducer,
  Orders,
  Cart: CartReducer,
  users: usersReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
