
const initialState = {
taskList:  [
    { _id: 1, title: "First Task", status: "todo" },
    { _id: 2, title: "Second Task", status: "todo" },
    { _id: 3, title: "Third Task", status: "todo" },
    { _id: 4, title: "Fourth Task", status: "wip" },
    { _id: 5, title: "Fifth Task", status: "wip" },
    { _id: 6, title: "Sixth Task", status: "wip" },
    { _id: 7, title: "Seventh Task", status: "todo" },
    { _id: 8, title: "Eighth Task", status: "done" },
    { _id: 9, title: "Ninth Task", status: "done" },
    { _id: 10, title: "Tenth Task", status: "done" }
  ],


   str: "start"
}
export default function RotateReducers (state=initialState, action) {

    
    switch (action.type) {
        case "rotate":
        return {
            rotating: action.payload
        };
        case "create-task":
            {
                let task = {
                    name: action.payload.name, 
                    status: action.payload.status
                    }
                    let updatedTaskList = state.taskList
                    updatedTaskList.push(task)
                    return {...state, taskList: updatedTaskList}
                    //using hooks in reducers
            }
        default:
            console.log("default state" , state)
        return state;
    }
};