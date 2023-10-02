import axios from "axios";
import * as types from "./actionTypes";

const getCar = () => (dispatch) => {
  dispatch({ type: types.GET_CAR_REQUEST });
  axios
    .get("http://localhost:8080/cars")
    .then((res) => {
      dispatch({ type: types.GET_CAR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_CAR_FAILURE });
    });
};

export default getCar;
