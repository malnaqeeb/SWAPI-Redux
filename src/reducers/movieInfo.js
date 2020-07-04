import { MOVIE_INFO } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_INFO:
      return payload;
    default:
      return state;
  }
}
