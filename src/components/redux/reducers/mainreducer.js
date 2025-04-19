import { ADD_TO_FAV, REM_TO_FAV } from "../actions/action";
const InitialState = {
  list: [],
};
const mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return { ...state, list: [...state.list, action.payload] };

    case REM_TO_FAV:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
