import API from "./api";

export const uploadFile = async(classroomId, formdata)=>{
    const response = await API.post(`notes/upload/${classroomId}`, formdata,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
}

export const fetchFile = async(classroomId) => {
    const response = await API.get(`notes/${classroomId}`);
    return response.data;
}