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
        setTimeout(() => {
            fetchData();
        }, 1000)
    }, []);
 return (
    <div>
        {users.length > 0 ? users.map((user) => (
            <Link key={user.id} to = {`/users/${user.id}`}>
                <User 
                name={user.name}
                email={user.email}
                />
            </Link>
        )): <h1>Loading...</h1> }
    </div>
 )
}

export default Home;
