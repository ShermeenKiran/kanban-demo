import { ADD_CASE,CHANGE_STATUS_CASE,CHANGE_TITLE_CASE,DONE_STATUS,
     INPROGRESS_STATUS, TODO_STATUS } from "../constants/constants";

const initialState = {
  taskList:  [
    { _id: '1c2x6f', title: "First Task", status: TODO_STATUS },
    { _id: 'ddqjwc', title: "Second Task", status: INPROGRESS_STATUS },
    { _id: 'ul8d3c', title: "Third Task", status: TODO_STATUS },
    { _id: 'nqg8fx', title: "Fourth Task", status: DONE_STATUS },
    { _id: '849m8x', title: "Fifth Task", status: DONE_STATUS }
  ],
}
export default function TaskReducer (state=initialState, action) {
  switch (action.type) {
    case ADD_CASE:
      return {
        taskList: [
          ...state.taskList,
          {
              //Every time randomly generating ID with every new item added
            _id: Math.random().toString(36).substring(7),
            title: action.payload.title,
            status: action.payload.status,
          }
        ]
      };
    case CHANGE_STATUS_CASE :
      return {
        taskList: state.taskList.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              status: action.payload.status,
            };
          } else {
            return item;
          }
        }),
      };
    case CHANGE_TITLE_CASE:
      return {
        taskList: state.taskList.map(item => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};