import React, { useEffect } from 'react'
import axios from 'axios'

function Home(){
    async function fetchData(){
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/")
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return <h1>Home</h1>
}

export default Home