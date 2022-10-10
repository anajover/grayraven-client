import service from "./config.services";

const getAllMemoriesService = () => {
    return service.get("/memories")
}

const addNewMemoryService = (newMemory) => {
    return service.post("/memories", newMemory)
}

const getMemoryDetailsService = (id) => {
    return service.get(`/memories/${id}/details`)
}

const deleteMemoryService = (id) => {
    return service.delete(`/memories/${id}`)
}

const editMemoryService = (id, memory) => {
    return service.patch(`/memories/${id}/edit`. memory)
}

export {
    getAllMemoriesService,
    addNewMemoryService,
    getMemoryDetailsService,
    deleteMemoryService,
    editMemoryService
}