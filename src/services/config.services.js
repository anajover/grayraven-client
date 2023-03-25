import axios from "axios";

const service = axios.create({
    // baseURL: "http://localhost:5005/api"
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api`
})

//código donde el token será enviado al backend
service.interceptors.request.use((config) => {

    const authToken = localStorage.getItem("authToken")

    if (authToken) {
        config.headers = { authorization: `Bearer ${authToken}`}
    }

    return config

})

export default service