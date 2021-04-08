import { createStore } from "redux";
import RotateReducers from "./RotateReducers";

function configureStore(state) {
  return createStore(RotateReducers,state);
}
//change name to generic rootreducer
export default configureStore;