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
    const filmInfo = {
      title: getData.title,
      story: getData.opening_crawl,
    };

    let people = [];
    // fetch array of URL's
    await Promise.all(
      characters.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then(async (name) =>
            people.push({
              name: name.name,
              films: await Promise.all(
                name.films.map((film) =>
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
                name.species.map((specie) =>
                  fetch(specie)
                    .then((response) => response.json())
                    .then((res) => res.name)
                )
              ),
              starships: await Promise.all(
                name.starships.map((starship) =>
                  fetch(starship)
                    .then((response) => response.json())
                    .then((res) => res.name)
                )
              ),
              homeworld: await fetch(name.homeworld)
                .then((response) => response.json())
                .then((res) => res.name),
              vehicles: await Promise.all(
                name.vehicles.map((vehicle) =>
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
      payload: { people, filmInfo },
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
