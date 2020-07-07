import { GET_MOVIES, MOVIES_ERROR } from "./types";

// Get all Movies

export const getFilms = () => async (dispatch) => {
  try {
    const res = await fetch("https://swapi.dev/api/films");
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const getData = await res.json();
    dispatch({
      type: GET_MOVIES,
      payload: getData.results,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
