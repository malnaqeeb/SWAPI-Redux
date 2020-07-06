import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { getFilms } from "../../actions/filmslist";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "../filmlist/css/filmlist.css";

const FilmsList = ({ getFilms, filmslist }) => {
  useEffect(() => {
    getFilms();
  }, [getFilms]);
  return (
    <div>
      <div className="home-header">
        <h1>Stars War</h1>
      </div>
      <div className="movie-container">
        <ul className="films-list">
          {filmslist ? (
            filmslist.map((film) => (
              <li className="film-item" key={uuidv4()}>
                <div className="movie-content">
                  <Link to={`/${film.url.slice(-2)}`}>
                    <h2>{film.title}</h2>
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </div>
  );
};

FilmsList.propTypes = {
  getFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmslist: state.filmslist,
});

export default connect(mapStateToProps, { getFilms })(FilmsList);
