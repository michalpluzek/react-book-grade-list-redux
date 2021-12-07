export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export const addRate = ({ author, comment, rate }) => ({
  type: ADD,
  payload: {
    author,
    comment,
    id: Math.floor(Math.random() * 1000),
    rate,
  },
});

export const deleteRate = (id) => ({
  type: DELETE,
  payload: {
    id,
  },
});

export const editRate = ({ id, author, comment, rate }) => ({
  type: EDIT,
  payload: {
    author,
    comment,
    id,
    rate,
  },
});
