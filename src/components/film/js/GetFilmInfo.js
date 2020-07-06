import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCharacters } from "../../../actions/filmdetails";
import Spinner from "../../Spinner";
import DisplyFilmInfo from "./DisplyFilmInfo";

const GetFilmInfo = ({
  getCharacters,
  filmdetails: { filmcharacters, filmInfo },
  match,
}) => {
  useEffect(() => {
    getCharacters(match.params.id);
  }, [getCharacters, match.params.id]);

  return (
    <div>
      {filmcharacters && filmInfo ? (
        <div>
          <DisplyFilmInfo filmcharacters={filmcharacters} filmInfo={filmInfo} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

GetFilmInfo.propTypes = {
  getCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmdetails: state.filmdetails,
});

export default connect(mapStateToProps, { getCharacters })(GetFilmInfo);
