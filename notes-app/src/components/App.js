import { useContext } from "react";
import NotesContext, { NotesProvider } from "./context/NotesContext";
import Header from "./Header";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";
import "../index.css";

function App() {
    return (
        <NotesProvider>
            <div className="wrapper">
                <Header text="Notes App" />
                <div className="container">
                    <div className="notes-app">
                        <NotesForm />
                        <NotesList />
                    </div>
                </div>
            </div>
        </NotesProvider>
    );
}

export default App;