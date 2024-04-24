import React, { useEffect, useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function Xspellcheck() {
  const [desc, setDesc] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const handleChange = (e) => {
    setDesc(e.target.value);
    getSuggestions(desc);
  };

  const getSuggestions = (desc) => {
    if (desc) {
      let arr = desc?.split(" ");
      for (let i = 0; i < arr.length; i++) {
        for (const [key, value] of Object.entries(customDictionary)) {
          if (key === arr[i].toLowerCase()) {
            setSuggestions(value);
            break;
          }
        }
      }
    } else {
      setSuggestions("");
    }
  };

  useEffect(() => {
    getSuggestions(desc);
  }, [desc]);

  return (
    <>
      <div>Spell Check and Auto-Correction</div>
      <br />
      <textarea row={5} column={50} value={desc} onChange={handleChange} />
      <div>Did you mean: {suggestions}</div>
    </>
  );
}

export default Xspellcheck;
