import { MOVIES_ERROR, MOVIE_INFO } from "./types";

// Get all characters
export const getFilmDetails = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`https://swapi.dev/api/films/${userId}`);
    if (!res.ok) {
      throw new Error("sometheing went wrong");
    }
    const getData = await res.json();
    const title = await getData;
    console.log("title", title);

    // let people = [];
    // // fetch array of URL's
    // await Promise.all(
    //   characters.map((url) =>
    //     fetch(url)
    //       .then((response) => response.json())
    //       .then((name) => console.log(name))
    //   )
    // );

    dispatch({
      type: MOVIE_INFO,
      payload: title,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
