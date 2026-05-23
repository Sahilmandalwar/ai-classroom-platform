import mongoose from 'mongoose';


const classroomSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        type: String,
    },
    classCode : {
        required: true,
        type: String,
        unique: true
    },
    teacher : {
        required: true,
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    students : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ]

},
{
    timestamps: true
});

export default mongoose.model('Classroom', classroomSchema);