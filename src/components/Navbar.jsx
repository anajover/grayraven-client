import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function Navbar() {

    const {isLoggedIn, user, authenticateUser} = useContext(AuthContext)

    const activeClass = (navInfo) => {
        return navInfo.isActive === true ? "active-nav" : "inactive-nav"
    }

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        authenticateUser()
    }

  return (
    <div>

        {user !== null && <p>Bienvenido: {user.username}</p>}

        {isLoggedIn === true ? (
            <nav className="navigation-bar">
                <NavLink to="/" className={activeClass} end={true}>Home</NavLink>
                <NavLink to="/constructs" className={activeClass} end={true}>Constructs</NavLink>
                <NavLink to="/memories" className={activeClass} end={true}>Memory Codex</NavLink>
                <NavLink to="/weapons" className={activeClass} end={true}>Depósito de Armas</NavLink>
                <NavLink to="/admin/profile" className={activeClass} end={true}>Panel de Administrador</NavLink>

                <button onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
        ) : (
            <nav className="navigation-bar">
                <NavLink to="/" className={activeClass} end={true}>Home</NavLink>
                <NavLink to="/constructs" className={activeClass} end={true}>Constructs</NavLink>
                <NavLink to="/memories" className={activeClass} end={true}>Memory Codex</NavLink>
                <NavLink to="/weapons" className={activeClass} end={true}>Depósito de Armas</NavLink>

                <NavLink to ="/admin" className={activeClass} end={true}>Administrador</NavLink>
            </nav>
        )}
    </div>
  )
}

export default Navbar