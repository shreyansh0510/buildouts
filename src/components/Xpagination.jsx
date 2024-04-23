import { Height } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const url =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function Xpagination() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);

  const [total, setTotal] = useState(0);

  let endValue = total ? total % 10 : 0;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const getUsers = async () => {
    try {
      let response = await axios.get(url);
      setUsers(response.data);
      setTotal(response.data.length);
    } catch (e) {
      console.log("failed to fetch data");
    }
  };

  const handlePrevious = () => {
    if (count > 1) {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }

    if (start > 0) {
      setStart((prevStart) => {
        return prevStart - 10;
      });
      setEnd((prevEnd) => {
        return prevEnd - 10;
      });
    }
  };

  const handleNext = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setStart((prevStart) => {
      return prevStart + 10;
    });
    setEnd((prevEnd) => {
      return prevEnd + 10;
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log("total", total);
  console.log("start", start);
  console.log("end", end);

  return (
    <>
      <div
        style={{
          diplay: "flex",
          justifyContent: "center",
          width: "100%",
          border: "1px solid black",
        }}
      >
        <h3>Employee Data Table</h3>
        <div style={{ minHeight: "80vh" }}>
          <table styles={{ width: "100%", fontSize: 12 }}>
            <thead>
              <tr style={{ color: "white", backgroundColor: "green" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(start, end).map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button type="submit" onClick={handlePrevious} disabled={start === 0}>
          Previous
        </button>
        <span>{count}</span>
        <button
          type="submit"
          onClick={handleNext}
          disabled={count === Math.floor(total / 10) + 1}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Xpagination;
