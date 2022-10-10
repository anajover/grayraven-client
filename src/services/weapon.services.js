import service from "./config.services";

const getAllWeaponsService = () => {
    return service.get("/weapons")
}

const addNewWeaponservice = (newWeapon) => {
    return service.post("/weapons", newWeapon)
}

const getWeaponDetailsService = (id) => {
    return service.get(`/weapons/${id}`)
}

const deleteWeaponService = (id) => {
    return service.delete(`/weapons/${id}`)
}

const editWeaponService = (id, weapon) => {
    return service.patch(`/weapons/${id}/edit`, weapon)
}

export {
    getAllWeaponsService,
    addNewWeaponservice,
    getWeaponDetailsService,
    deleteWeaponService,
    editWeaponService
}