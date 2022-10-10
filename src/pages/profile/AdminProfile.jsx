import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { getUsernameService } from '../../services/profile.services'

function AdminProfile() {

    const [username, setUsername] = useState(null);

    useEffect(() => {
        getUsername()
    }, [])

    const getUsername = async () => {

        try {
            const response = await getUsernameService()
            console.log( "Username response" , response)
            setUsername(response.data)
        }catch (error) {
            Navigate("/error")
        }
    }
    

  return (
    <div>

    <h3>Bienvenido {username}</h3>

        {/* <h3> Bienvenido {user.username}</h3> */}
        <Link to={"/constructs/create"}>
            <button>Crear Construct</button>
        </Link> 
    </div>
  )
}

export default AdminProfile