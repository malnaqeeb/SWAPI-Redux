import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCharacters } from "../actions/characters";
import Spinner from "./Spinner";
import "./UserItem.css";
import FilmsCharacters from "./FilmsCharacters";

const FilmsInfo = ({
  getCharacters,
  characters: { people, filmInfo },
  match,
}) => {
  useEffect(() => {
    getCharacters(match.params.id);
  }, [getCharacters, match.params.id]);

  return (
    <div>
      {" "}
      {people && filmInfo ? (
        <div>
          <h1>{filmInfo.title}</h1>
          <p>{filmInfo.story}</p>
          <FilmsCharacters people={people} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

FilmsInfo.propTypes = {
  getCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { getCharacters })(FilmsInfo);
