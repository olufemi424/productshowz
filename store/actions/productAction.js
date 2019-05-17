import axios from "axios";
import { GETALLPRODUCTS, GETPRODUCT } from "../types";

export const getAllProducts = zip => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.cofactordigital.com/retail/0ba78575560c024e/listings.json?postalcode=${zip}&returnmode=full&sort=26`
    );

    dispatch({ type: GETALLPRODUCTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
