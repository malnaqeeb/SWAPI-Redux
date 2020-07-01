import { MOVIE_CHARACTERS } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_CHARACTERS:
      return payload;
    default:
      return state;
  }
}
