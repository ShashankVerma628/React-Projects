import { useContext } from "react";
import NotesContext from "./context/NotesContext";
import Note from "./Note";

const NotesList = () => {
  const { notes, handleDelete } = useContext(NotesContext);
  return (
    <div>
      <h3 style={{ marginBottom: "30px" }}>List of Notes</h3>
      <div className="notes-container">
        {notes.map((note) => {
          return <Note key={note.id} handleDelete={handleDelete} note={note} />;
        })}
      </div>
    </div>
  );
};

export default NotesList;
