import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFilmDetails } from "../actions/movieInfo";

const MovieInfo = ({ getFilmDetails, filmdetails, match }) => {
  console.log("filmdetails", filmdetails);
  useEffect(() => {
    getFilmDetails(match.params.id);
  }, [getFilmDetails, match.params.id]);
  return <div>Movie info</div>;
};

MovieInfo.propTypes = {
  getFilmDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmdetails: state.filmdetails,
});

export default connect(mapStateToProps, { getFilmDetails })(MovieInfo);
