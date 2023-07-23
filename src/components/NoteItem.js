import React,{useContext} from 'react'
import noteContext from "../context/notes/NoteContext"

function NoteItem(props) {
    const {note,updateNote} = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;

    const handleClick = ()=>
    {
        deleteNote(note._id);
    }
    return (
            <div className="col-md-3">
                <div className="card my-2">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={handleClick} style={{cursor:"pointer"}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}} style={{cursor:"pointer"}}></i>
                    </div>
                </div>
            </div>
    )
}

export default NoteItem