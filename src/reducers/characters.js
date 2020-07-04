import { MOVIE_CHARACTERS, GET_MOVIES } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_CHARACTERS:
      return payload;
    case GET_MOVIES:
      return {};
    default:
      return state;
  }
}
