import * as types from "./actionTypes";

const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.GET_CAR_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };

    case types.GET_CAR_SUCCESS:
      return {
        cars: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_CAR_FAILURE:
      return {
        isLoading: false,
        isError: true,
      };
  }
};

export default reducer;
