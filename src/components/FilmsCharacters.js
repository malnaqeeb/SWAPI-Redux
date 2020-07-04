import React, { useState } from "react";
import Card from "./Card";
import "./UserItem.css";
import { v4 as uuidv4 } from "uuid";

const FilmsCharacters = ({ people }) => {
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisply] = useState(people);

  const handleChange = (e) => {
    if (e.length > 2) {
      console.log(e);
      let newList = [];
      setWord(e);
      newList = people.filter((person) =>
        person.name.toLowerCase().includes(word)
      );
      setFilterDisply(newList);
    } else {
      setFilterDisply(people);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search (type at least 3 letters)"
      />
      <ul>
        {filterDisplay.map((character) => (
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
                    character.starships.map((starship) => <li>{starship}</li>)
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
  );
};

export default FilmsCharacters;
