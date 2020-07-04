import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCharacters } from "../actions/characters";
import { v4 as uuidv4 } from "uuid";
import Spinner from "./Spinner";
import Card from "./Card";
import "./UserItem.css";
import SeacrchBar from "./SeacrchBar";

const MoviesCharacters = ({
  getCharacters,
  characters: { people, filmInfo },
  match,
  films,
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
          {/* <input placeholder="search"></input> */}
          <SeacrchBar people={people} />
          <ul>
            {people.map((character) => (
              <li
                style={{ listStyle: "none" }}
                key={uuidv4()}
                className="user-item"
              >
                <Card>
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td> <td>{character.name}</td>
                      </tr>
                      <h4>films:</h4>{" "}
                      {character.films.map((film) => (
                        <li>{film}</li>
                      ))}
                      <h4>species:</h4>{" "}
                      {character.species.length > 0 ? (
                        character.species.map((specie) => <li>{specie}</li>)
                      ) : (
                        <h6>N/a</h6>
                      )}
                      <h4>vehicles:</h4>{" "}
                      {character.vehicles.length > 0 ? (
                        character.vehicles.map((vehicle) => <li>{vehicle}</li>)
                      ) : (
                        <h6>N/a</h6>
                      )}
                      <h4>starships:</h4>{" "}
                      {character.starships.length > 0 ? (
                        character.starships.map((starship) => (
                          <li>{starship}</li>
                        ))
                      ) : (
                        <h6>N/a</h6>
                      )}
                      <tr>
                        <td>birth_year:</td>
                        <td>{character.birth_year}</td>
                      </tr>
                      <tr>
                        <td>eye_color:</td>
                        <td>{character.eye_color}</td>
                      </tr>
                      <tr>
                        <td>gender:</td>
                        <td>{character.gender}</td>
                      </tr>
                      <tr>
                        <td>hair_color:</td>
                        <td>{character.hair_color}</td>
                      </tr>
                      <tr>
                        <td>homeworld:</td>
                        <td>{character.homeworld}</td>
                      </tr>
                      <tr>
                        <td>created:</td>
                        <td>{character.created}</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

MoviesCharacters.propTypes = {
  getCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  films: state.films,
});

export default connect(mapStateToProps, { getCharacters })(MoviesCharacters);
