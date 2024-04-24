import React, { useState } from "react";

export default function Xlogin() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [loggedin, setLoggedin] = useState(false);
  const [failed, setFailed] = useState(false);

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
    if (user.username === "user" && user.password === "password") {
      setLoggedin(true);
    } else {
      setFailed(true);
    }
  };

  return (
    <>
      <div>
        <div>Login Page</div>
        {failed ? <span>Invalid username or password</span> : ""}
        <div>
          {!loggedin ? (
            <form action="#">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="username"
                required
              />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="password"
                required
              />
              <br />
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          ) : (
            <div>Welcome, user!</div>
          )}
        </div>
      </div>
    </>
  );
}
