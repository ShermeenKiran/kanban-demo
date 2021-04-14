import { CHANGE_STATUS } from "../constants/constants";

export const changeStatusAction = (id, status) => {
  return{
    type: CHANGE_STATUS,
    payload: { id, status },
  };
};