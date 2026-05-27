import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    classroom : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Classroom",
        required: true
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    title : {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    attachments : {
       type : [String],
       default : []

    },
    reactions : {
        type: [mongoose.Schema.Types.ObjectId],
        ref : "User",
        default : []

    },
    
},
{
    timestamps: true,
}
)

export default mongoose.model('Announcement', announcementSchema);