import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Navbar from '../../components/Navbar';
// import { AuthContext } from '../../context/auth.context'
import { getUsernameService } from '../../services/profile.services'

function AdminProfile() {

    const [username, setUsername] = useState("");

    useEffect(() => {
        getUsername()
    }, [])

    const getUsername = async () => {

        try {
            const response = await getUsernameService()
            console.log( "Username response" , response.data.username)
            setUsername(response.data)
        }catch (error) {
            Navigate("/error")
        }
    }
    

  return (
    <div>

    <Navbar/>

    <h3>Bienvenido {username.username}</h3>

        {/* <h3> Bienvenido {user.username}</h3> */}
        <Link to={"/constructs/create"}>
            <button>Crear Construct</button>
        </Link> 
    </div>
  )
}

export default AdminProfile