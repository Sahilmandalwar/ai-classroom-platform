import API from "./api";

export const fetchAllAnnouncement = async(classId)=>{
    const response = await API.get(`/announcement/${classId}`);
    return response.data;
}

export const createAnnoucement = async(formData)=>{
    const response = await API.post(`/announcement/create`, formData);
    return response.data;
}   

export const deleteAnnouncement = async(announcementId)=>{
    const response = await API.delete(`/announcement/${announcementId}`);
    return response.data;
}