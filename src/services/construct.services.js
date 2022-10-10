import service from "./config.services";

const getAllConstructsService = () => {
    return service.get("/constructs")
}

const addNewConstructService = (newConstruct) => {
    return service.post("/constructs/create", newConstruct)
}

const getConstructDetailsService = (id) => {
    return service.get(`/constructs/${id}`)
}

const deleteConstructService = (id) => {
    return service.delete(`/constructs/${id}`)
}

const editConstructService = (id, construct) => {
    return service.patch(`/constructs/${id}/edit`, construct)
}

export {
    getAllConstructsService,
    addNewConstructService,
    getConstructDetailsService,
    deleteConstructService,
    editConstructService
}