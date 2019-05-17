import { FETCHPOSTALCODE } from "../types";

const initState = {
  postalcode: [],
  contentDateSrting: null
};

const postalCodeReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHPOSTALCODE:
      return {
        ...state,
        postalcode: [...action.payload.results],
        contentDateSrting: action.payload.contentDateString
      };
    default:
      return state;
  }
};

export default postalCodeReducer;
