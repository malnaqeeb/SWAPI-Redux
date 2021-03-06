import { MOVIES_ERROR, MOVIE_CHARACTERS } from "./types";

// Get all characters
export const getCharacters = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`https://swapi.dev/api/films/${userId}`);
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    const characters = await data.characters;

    const filmInfo = {
      title: data.title,
      story: data.opening_crawl,
      director: data.director,
      producer: data.producer,
      release_date: data.release_date,
    };

    const newHttp = "https";
    let filmcharacters = [];
    // to prevent mixed content error when deploying we need to all the fetched url to start with (https) instead of (http)
    const newHttps = (url) => {
      return url.map((u) => newHttp.concat(u.slice(4)));
    };
    // fetch array of URL's
    await Promise.all(
      newHttps(characters).map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then(async (name) =>
            filmcharacters.push({
              name: name.name,
              films: await Promise.all(
                newHttps(name.films).map((film) =>
                  fetch(film)
                    .then((response) => response.json())
                    .then((res) => res.title)
                )
              ),
              birth_year: name.birth_year,
              eye_color: name.eye_color,
              gender: name.gender,
              hair_color: name.hair_color,
              species: await Promise.all(
                newHttps(name.species).map((specie) =>
                  fetch(specie)
                    .then((response) => response.json())
                    .then((res) => res.name)
                )
              ),
              starships: await Promise.all(
                newHttps(name.starships).map((starship) =>
                  fetch(starship)
                    .then((response) => response.json())
                    .then((res) => res.name)
                )
              ),
              homeworld: await fetch(newHttp.concat(name.homeworld.slice(4)))
                .then((response) => response.json())
                .then((res) => res.name),
              vehicles: await Promise.all(
                newHttps(name.vehicles).map((vehicle) =>
                  fetch(vehicle)
                    .then((response) => response.json())
                    .then((res) => res.name)
                )
              ),
              created: name.created,
            })
          )
      )
    );

    dispatch({
      type: MOVIE_CHARACTERS,
      payload: { filmcharacters, filmInfo },
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
