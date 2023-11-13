import createSagaMiddleware from "redux-saga";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";
import { configureStore, combineReducers } from "@reduxjs/toolkit";


const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ user: userReducer });

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;