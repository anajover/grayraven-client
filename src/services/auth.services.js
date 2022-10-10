import service from "./config.services";

const adminService = (user) => {
    return service.post("/auth/admin", user)
}

const verifyService = () => {
    return service.get("/auth/verify")
}

export {
    adminService,
    verifyService
}