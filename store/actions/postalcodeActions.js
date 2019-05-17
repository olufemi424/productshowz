import axios from "axios";
import { FETCHPOSTALCODE } from "../types";

export const getPostalCode = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.cofactordigital.com/retail/0ba78575560c024e/postalcodes.json`
    );
    dispatch({ type: FETCHPOSTALCODE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
