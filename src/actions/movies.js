import { GET_MOVIES, MOVIES_ERROR } from "./types";

// Get all Movies

export const getMovies = () => async (dispatch) => {
  try {
    const res = await fetch("https://swapi.dev/api/films");
    if (!res.ok) {
      throw new Error("sometheing went wrong");
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
