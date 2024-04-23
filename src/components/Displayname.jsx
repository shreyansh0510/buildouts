import React, { useState } from "react";

function Displayname() {
  const [user, setUser] = useState({
    first: "",
    last: "",
  });

  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user>>", user);
    let username = `${user.first} ${user.last}`;
    setFullName(username);
  };

  return (
    <>
      <form action="#">
        <h1>Full Name Display</h1>

        <label htmlFor="first">
          First Name:
          <input
            type="text"
            id="first"
            name="first"
            value={user.first}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="last">
          Last Name:
          <input
            type="text"
            id="last"
            name="last"
            value={user.last}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <br />
        <span>Full Name: {fullName}</span>
      </form>
    </>
  );
}

export default Displayname;
