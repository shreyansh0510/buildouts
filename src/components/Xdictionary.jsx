import React, { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

export default function Xdictionary() {
  const [keyword, setKeyword] = useState("");

  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchKeyword();
  };

  const searchKeyword = () => {
    console.log("keyword", keyword);
    let result = dictionary.filter(
      (item) => item.word.toLowerCase() === keyword.toLowerCase()
    );

    if (result.length) {
      setSuggestion(result[0].meaning);
    } else {
      setSuggestion("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h3>Dictionary App</h3>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit"> Search</button>
      </form>
      <h4>Definition:</h4>
      <br />
      {suggestion ? <p>{suggestion}</p> : ""}
    </>
  );
}
