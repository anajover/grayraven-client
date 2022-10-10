import service from "./config.services";

const uploadService = (uploadForm) => {
    return service.post("/uploader", uploadForm)
}

export {
    uploadService
}