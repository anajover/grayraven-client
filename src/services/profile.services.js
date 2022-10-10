import service from "./config.services";

const getUsernameService = () => {
    return service.get("/admin/profile")
}

export {
    getUsernameService
}