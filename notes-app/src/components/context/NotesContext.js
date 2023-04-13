import { createContext, useState } from "react";
const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ex saepe vel, obcaecati, laborum nobis, nostrum neque modi quod inventore sunt vero perferendis omnis magnam sit veniam dolorem. Quidem quia ullam, ipsum voluptatibus provident molestias necessitatibus dolorum tempore, similique assumenda aspernatur tenetur magni quibusdam. Laborum."
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ex saepe vel, obcaecati, laborum nobis, nostrum neque modi quod inventore sunt vero perferendis omnis magnam sit veniam dolorem. Quidem quia ullam"
        },
    ]);

    const handleSubmit = (newNote) => {
        setNotes([newNote, ...notes]);
    }

    const handleDelete = (passedNote) => {
        setNotes(notes.filter((note) => {
            return note.id != passedNote.id;
        }));
    }
    return <NotesContext.Provider value={{
        notes,
        handleSubmit,
        handleDelete
    }}>
        {children}
    </NotesContext.Provider>
}

export default NotesContext;