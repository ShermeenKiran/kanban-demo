import { createStore } from "redux";
import TaskReducer from "../reducers/TaskReducer";

function configureStore(state) {
  return createStore(TaskReducer,state);
}
//change name to generic rootreducer
export default configureStore;