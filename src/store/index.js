import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import socketReducer from "./reducers/socket/socket.reducer";
import reduxThunk from 'redux-thunk';

const reducers = combineReducers({
  socket: socketReducer,
});

const composeEnhancers = process.browser
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
