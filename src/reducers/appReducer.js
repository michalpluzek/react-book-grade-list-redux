import { ADD, DELETE, EDIT } from "../actions/appActions";

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter((rate) => rate.id !== action.payload.id);

    case EDIT:
      return state.map((rate) =>
        rate.id !== action.payload.id
          ? rate
          : {
              author: action.payload.author,
              comment: action.payload.comment,
              id: rate.id,
              rate: action.payload.rate,
            }
      );

    default:
      console.warn(`Nie obsługiwana akcja typu: ${action.type}`);
      return state;
  }
};
