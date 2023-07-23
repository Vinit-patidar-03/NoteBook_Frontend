import React, { useState } from "react";
import new_Context from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "AuthToken": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note))
    props.showAlert("your Note has added successfully","success");
  }

  //Delete a Note

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "AuthToken": localStorage.getItem('token')
      }
    });

    const json = await response.json();
    console.log(json)
    const newNote = notes.filter((note) => {
      return note._id !== id;
    })

    setNotes(newNote);
    props.showAlert("your Note has deleted successfully","success");

  }
  //Edit a Note

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "AuthToken": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  //Fetch Notes
  const fetchNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "AuthToken": localStorage.getItem('token')
      }
    });

    const json = await response.json();
    setNotes(json);
  }

  return (
    <new_Context.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, fetchNote }}>
      {props.children}
    </new_Context.Provider>
  )
}

export default NoteState;