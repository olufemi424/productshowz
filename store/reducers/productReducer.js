import { GETALLPRODUCTS, GETPRODUCT } from "../types";

const initState = {
  results: [],
  product: {}
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GETALLPRODUCTS:
      console.log(action.payload.results);
      return {
        ...state,
        results: [...action.payload.results]
      };

    case GETPRODUCT:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default productReducer;
