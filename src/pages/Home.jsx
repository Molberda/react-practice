import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) =>(
        <div key = {user.id}>
          <h1>{user?.name}</h1>
        </div>
        ))}
    </div>
  );
}

export default Home;
