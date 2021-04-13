import { propTypes } from "react-bootstrap/esm/Image";

export const createTaskAction =(data)=>{
    console.log("data",data)
   return({
    type: "create-task",
    payload: [{id:data.id,title:data.title,status:data.status}]
   })
  };