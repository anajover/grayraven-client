import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { adminService } from '../../services/auth.services'

function Admin() {

  const {authenticateUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleAdmin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    }

    try {
      const response = await adminService(user)
      localStorage.setItem("authToken", response.data.authToken)
      authenticateUser()
      navigate("/admin/profile")
    }catch(error) {
      
      if(error.response.status === 400 || error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage)
      } else (
        navigate("/error")
      )
    }
  }

  return (
    <div>

      <h1>Administrador</h1>

      <form onSubmit={handleAdmin}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          />

          {errorMessage !== null && <p>{errorMessage}</p>}

          <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Admin