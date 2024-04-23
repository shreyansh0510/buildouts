import React, { useState } from "react";

export default function Calculator() {
  const [exp, setExp] = useState("");
  const [result, setResult] = useState();

  const handleClick = (e) => {
    setExp((prevExp) => (prevExp += e.target.value));
  };

  const handleClear = () => {
    setExp("");
  };

  const handleEvaluate = () => {
    console.log("handleEvaluate >>>>", exp);
  };

  return (
    <>
      <div>
        Calculator
        <div
          style={{ border: "1px solid gray", width: "100px", height: "20px" }}
        >
          {exp}
        </div>
        <div
          style={{ display: "grid", gridArea: "1 1 4 4", rowGap: 1, colGap: 1 }}
        >
          <div>
            <input value="7" type="button" onClick={handleClick} />
            <input value="8" type="button" onClick={handleClick} />
            <input value="9" type="button" onClick={handleClick} />
            <input value="+" type="button" onClick={handleClick} />
          </div>
          <div>
            <input value="4" type="button" onClick={handleClick} />
            <input value="5" type="button" onClick={handleClick} />
            <input value="6" type="button" onClick={handleClick} />
            <input value="-" type="button" onClick={handleClick} />
          </div>
          <div>
            <input value="1" type="button" onClick={handleClick} />
            <input value="2" type="button" onClick={handleClick} />
            <input value="3" type="button" onClick={handleClick} />
            <input value="*" type="button" onClick={handleClick} />
          </div>

          <div>
            <input value="c" type="button" onClick={handleClear} />
            <input value="0" type="button" onClick={handleClick} />
            <input value="=" type="button" onClick={handleEvaluate} />
            <input value="/" type="button" onClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
}
