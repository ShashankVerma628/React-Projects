import { FaTimes, FaEdit } from "react-icons/fa";

function Note({ note, handleDelete }) {
  return (
    <div className="single-note">
      <p>{note.text}</p>
      <div className="btn-container">
        <button>
          Edit
          <FaEdit />
        </button>
        <button className="danger" onClick={() => handleDelete(note)} >
          Delete
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Note;
