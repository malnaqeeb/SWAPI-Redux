import React, { useState } from "react";
// import { Input } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import MoviesCover from "../../../PHOTO.json";
import "../css/UserItem.css";
import "../css/UsersList.css";
import "../css/input.css";

const FilmsCharacters = ({ filmcharacters, filmInfo }) => {
  const [input, setInput] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(filmcharacters);

  const cover = MoviesCover.filter((cover) => cover.name === filmInfo.title);

  const handleChange = (e) => {
    setInput(e);
    if (e.length > 2) {
      let filteredList = [];
      filteredList = filmcharacters.filter((person) =>
        person.name.toLowerCase().includes(input)
      );
      setFilterDisplay(filteredList);
    } else {
      setFilterDisplay(filmcharacters);
    }
  };
  return (
    <div className="movie-container">
      <div className="wrapper-header">
        <div className="box1-header">
          <img src={cover[0].src} alt={filmInfo.title} />
        </div>
        <div className="box2-header">
          <div className="box2-header-1">
            <h1>{filmInfo.title}</h1>
            <p>{filmInfo.story}</p>
          </div>
          <div className="box2-header-2">
            {" "}
            <h3>Director:</h3>
            <p>{filmInfo.director}</p>
            <h3>Producer:</h3>
            <p>{filmInfo.producer}</p>
            <h3>Release Date</h3>
            <p>{filmInfo.release_date}</p>
          </div>
        </div>
      </div>
      <div className="input-field">
        <input
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search (type at least 3 letters)"
          className="input-field"
        />
      </div>
      <div>
        <ul>
          {filterDisplay &&
            filterDisplay.map((character) => (
              <li key={uuidv4()} className="wrapper-li-content">
                <div className="box box1">
                  <div className="box1-row1">
                    <img
                      src="https://i.postimg.cc/HnSM4tjH/C-3PO1.jpg"
                      alt={character.name}
                    />
                  </div>

                  <div className="box1-row2">
                    <h3>{character.name}</h3>
                  </div>
                </div>
                <div className="box box2" style={{ width: "100%" }}>
                  <div className="more-info">
                    <h5>Birth Year:</h5> <span>{character.birth_year}</span>
                  </div>
                  <div className="more-info">
                    <h5>Eye Color:</h5>
                    <span>{character.eye_color}</span>
                  </div>
                  <div className="more-info">
                    <h5>Gender:</h5>
                    <span>{character.gender}</span>
                  </div>
                  <div className="more-info">
                    <h5>Hair Color:</h5>
                    <span>{character.hair_color}</span>
                  </div>
                </div>
                <div className="box box3">
                  <div style={{ width: "100%" }}>
                    <h4> Films:</h4>
                    {character.films.map((film) => (
                      <p>{film}</p>
                    ))}
                  </div>
                </div>
                <div className="box box4">
                  <div style={{ width: "100%" }}>
                    <h4>Starships:</h4>{" "}
                    {character.starships.length > 0 ? (
                      character.starships.map((starship) => <p>{starship}</p>)
                    ) : (
                      <p>N/A</p>
                    )}
                    <h4>Vehicles:</h4>{" "}
                    {character.vehicles.length > 0 ? (
                      character.vehicles.map((vehicle) => <p>{vehicle}</p>)
                    ) : (
                      <p>N/A</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmsCharacters;
