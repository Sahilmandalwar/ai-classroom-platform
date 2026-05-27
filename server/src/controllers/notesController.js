import Notes from '../models/Notes.js';
import Classroom from '../models/Classroom.js';

export const uploadNotes = async(req,res) =>{
    try{
        const {title, description} = req.body;
    
        const {classroomId} = req.params;
        const createdBy = req.user.id;

        const file = req.file;

        if(!title || !file) {
            return res.status(400).json({
                message: "required fields missing",
            })
        }

        const classroom = await Classroom.exists({
            _id: classroomId,
            teacher : createdBy
        })

        if(!classroom) {
            return res.status(403).json({
                message : "unauthorised access",
            })
        }

        const notes = await Notes.create({
            title, description,
            fileUrl: `/uploads/${file.filename}`,
            classroom : classroomId,
            createdBy
        })

        res.status(201).json({
            message : "Notes uploaded successfully",
            notes
        })



    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
}

export const getClassroomNotes = async(req, res) => {
      try {
            const {classroomId} = req.params;
            const user = req.user.id;
    
            const classroom = await Classroom.exists({
                _id: classroomId,
                $or: [
                    {teacher : user},
                    {students : user}
                ]
            })
    
            if(!classroom){
                return res.status(403).json({
                    message : "unauthorised access",
                })
            }
    
            const notes = await Notes.find({
                classroom : classroomId,
            }).sort({createdAt : -1})
            .populate("createdBy","name email")
    
            res.status(200).json({
                message : "fetched all notes",
                notes,
            })
    
        }catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Server Error",
            });
        }
}