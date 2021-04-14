import { CHANGE_TITLE } from "../constants/constants";

export const changeTitleAction = (id, title) => {
  return{
    type: CHANGE_TITLE,
    payload: { id, title },
  };
};