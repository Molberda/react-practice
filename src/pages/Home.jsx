import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "../components/User.jsx";

function Home() {
    const [users, setUser] = useState([]);

    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUser(data);
    }
    useEffect(() => {
      fetchData();
    }, []);
 return (
    <div>
        {users.map((user) => (
            <Link key={user.id} to = {`/users/${user.id}`}>
                <User 
                name={user.name}
                />
            </Link>
        ))}
    </div>
 )
}

export default Home;
