import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import User from "../components/User.jsx";

function Users() {
  const { id } = useParams();
  const [users, setUser] = useState({})

  async function fetchUser(){
     const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(data)
  }
  useEffect(() => {
    fetchUser()
  }, [])
return <h1>{id}</h1>
}

export default Users;
