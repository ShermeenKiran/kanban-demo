export const addAction = (title, status) => {
  return {
    type: "ADD",
    payload: { title, status },
  };
};

export default addAction;