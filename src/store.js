//store

import rootReducer from "./reducers";
import { createStore } from "redux";
//////store is a centralized object that provides state of the application
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()); //all application states are in store now

export default store;

//you can access this store using Provider
// store is just an object with a few methods on it