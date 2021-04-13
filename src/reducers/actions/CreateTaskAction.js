export const createTaskAction=(data) => {
    return({
    type: "create-task",
    payload: {id:data.id,title:data.title,status:data.status}
    })
 };