import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCharacters } from "../actions/characters";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "./UserItem.css";
const MoviesCharacters = ({ getCharacters, characters, match }) => {
  useEffect(() => {
    getCharacters(match.params.id);
  }, [getCharacters, match.params.id]);

  let movies = [];
  // fetch array of URL's
  const fetchCharacterMovies = async () => {
    const filmsList = await characters.map((character) => character.films);
    console.log(filmsList);
    await filmsList.map((list) =>
      Promise.all(
        list.map((item) =>
          fetch(item)
            .then((res) => res.json())
            .then((name) => movies.push(name))
        )
      )
    );
  };

  useEffect(() => {
    fetchCharacterMovies();
  }, [fetchCharacterMovies]);
  console.log("movies", movies);
  return (
    <div>
      <ul>
        {characters &&
          characters.map((character) => (
            <li
              style={{ listStyle: "none" }}
              key={uuidv4()}
              className="user-item"
            >
              <Card>{character.name}</Card>
            </li>
          ))}
      </ul>
    </div>
  );
};
MoviesCharacters.propTypes = {
  getCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { getCharacters })(MoviesCharacters);
