import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, fetchNote, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNote();
    } else {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const closeRef = useRef(null);

  const [note, setNote] = useState({
    id: "id",
    etitle: "title",
    edescription: "desc",
    etag: "tag",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const change = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    closeRef.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("your Note has updated successfully","success");
  };

  return (
    <div>
      <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-3">
                <h3 className="my-3">Add a Note</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      required
                      value={note.etitle}
                      minLength={5}
                      aria-describedby="emailHelp"
                      onChange={change}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      required
                      value={note.edescription}
                      minLength={5}
                      name="edescription"
                      onChange={change}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      required
                      value={note.etag}
                      onChange={change}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={closeRef}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <h3>Your Notes</h3>
        <h6>{notes.length === 0 && "No Notes to Display"}</h6>
        {notes.map((notes) => {
          return (
            <NoteItem note={notes} updateNote={updateNote} key={notes._id} />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
