import API from "./api";

export const getMyClassrooms = async() =>{
    const response = await API.get("/classroom/my-classroom");
    return response.data;
}

export const createClassroom = async(classroomData) =>{
    const response = await API.post("/classroom/create",classroomData);
    return response.data;
}

export const joinClassroom = async(classCode)=>{
    const response = await API.post("/classroom/join", classCode);
    return response.data;
}