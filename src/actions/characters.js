import { MOVIES_ERROR, MOVIE_CHARACTERS } from "./types";

// Get all characters
export const getCharacters = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`https://swapi.dev/api/films/${userId}`);
    if (!res.ok) {
      throw new Error("sometheing went wrong");
    }
    const getData = await res.json();
    const characters = await getData.characters;

    let people = [];
    // fetch array of URL's
    await Promise.all(
      characters.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((name) => people.push(name))
      )
    );

    dispatch({
      type: MOVIE_CHARACTERS,
      payload: people,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
