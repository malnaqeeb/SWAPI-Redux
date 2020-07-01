import React, { useEffect } from "react";
// import MovieInfo from "./MovieInfo";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { getMovies } from "../actions/movies";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MoviesList = ({ getMovies, films }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return (
    <ul>
      {films ? (
        films.map((film) => (
          <li key={uuidv4()}>
            <Link to={`/${film.episode_id}`}>
              <div>
                <h2>{film.title}</h2>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </ul>
    // <h2>movies list</h2>
  );
};

MoviesList.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps, { getMovies })(MoviesList);
