import mongoose from 'mongoose';

const attendenceSchema = new mongoose.Schema({
    classroom : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Classroom",
        required: true,
    },
    student :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
    session : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Session",
        required: true,
    },
    status : {
        type: [String],
        enum : ["present", "absent"],
        default : "present",
    },
    markedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
},
{timestamps: true});

export default mongoose.model("Attendence", attendenceSchema);