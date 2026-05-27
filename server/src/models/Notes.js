import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    fileUrl : {
        type: String,
        required: true,
    },
    classroom : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classroom",
        required: true,
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {
    timestamps : true,
});

export default mongoose.model("Notes", notesSchema);