import postalCodeReducer from "./reducers/postalCodeReducer";
import productsReducer from "./reducers//productReducer";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  postalcode: postalCodeReducer,
  products: productsReducer
});

//create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
