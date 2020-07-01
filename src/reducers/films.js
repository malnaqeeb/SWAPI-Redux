import { GET_MOVIES } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return payload;
    default:
      return state;
  }
}
