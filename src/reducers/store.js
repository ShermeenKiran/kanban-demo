import { createStore } from "redux";
import RotateReducers from "./RotateReducers";

function configureStore(state = { rotating: true }) {
  return createStore(RotateReducers,state);
}

export default configureStore;