import { NotesList, CreateNoteForm } from "./components";  
import notesService from './services/notes/notesService';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesService.getAllNotes().then((data) => {
        console.log(data.notes)
        setNotes(data.notes);
    })
  }, []);

  return (
    <table className="notesTable">
      <h2 className="headerTitle">NOTES</h2>
      <CreateNoteForm />
      <hr />
      <NotesList notes={notes} />
    </table>
  );
};

export default App;