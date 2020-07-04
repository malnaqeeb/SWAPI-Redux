import React, { useState } from "react";

const SeacrchBar = ({ people }) => {
  console.log(people);
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisply] = useState(people);

  const handleChange = (e) => {
    // let OldList = people.map((person) => {
    //   return { name: person.name.toLowerCase() };
    // });

    if (e !== "") {
      let newList = [];
      setWord(e);
      newList = people.filter((person) =>
        person.name.includes(word.toLowerCase())
      );
      setFilterDisply(newList);
    }
  };
  return (
    <ul>
      <input onChange={(e) => handleChange(e.target.value)} />
      {filterDisplay.map((person, i) => (
        <li>{person.name}</li>
      ))}
      hi
    </ul>
  );
};

export default SeacrchBar;
