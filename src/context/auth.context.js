import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext()

function AuthWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const authenticateUser = async () => {

        try {

            const response = await verifyService()
            console.log("Token válido")
            setIsLoggedIn(true)
            setUser(response.data)

        }catch (error) {

            console.log("El usuario no tiene token o no es correcto.")
            setIsLoggedIn(false)
            setUser(null)

        }
    }

    const passedContext = {
        isLoggedIn,
        user,
        authenticateUser
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthWrapper}