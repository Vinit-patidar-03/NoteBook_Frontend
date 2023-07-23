import React,{useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext"

function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:'',description:'',tag:''})

    const handleClick = (e)=>
    {
      e.preventDefault() 
      addNote(note.title,note.description,note.tag); 
      setNote({title:'',description:'',tag:''})
    }

    const change = (e)=>
    {
       setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <div className="container my-3">
        <h3 className="my-4">Add a Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' value={note.title} minLength={5} required aria-describedby="emailHelp" onChange={change}/>
            </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" minLength={5} value={note.description} required name='description' onChange={change}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={change}/>
          </div>
          <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote