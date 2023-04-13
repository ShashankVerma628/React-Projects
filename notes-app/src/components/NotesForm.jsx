import { useState, useContext } from "react";
import Button from "./shared/Button";
import { v4 as uuidv4 } from "uuid";
import NotesContext from "./context/NotesContext";

function NotesForm() {
  const { handleSubmit } = useContext(NotesContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      text: text,
    };

    handleSubmit(newNote);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here..."
          />
        </div>
        <Button type="submit">Add Note</Button>
      </form>
    </div>
  );
}

export default NotesForm;
