import { NotesList, UpdateNoteForm } from "./components";  
import { CreateNoteForm } from "./components/CreateNoteForm";
import './App.css';
import { useNotes } from './hooks/useNotes';

const App = () => {
  const { notes, handleUpdateNote } = useNotes();

  return (
    <div className="App">
  <div className="listNotes">
    <h2 className="headerTitle">NOTES</h2>
    <NotesList notes={notes} handleUpdateNote={handleUpdateNote} />
  </div>
  <div className="formNotes">
    <h2 className="headerCreateNote">CREATE NOTE FORM</h2>
    <CreateNoteForm handleUpdateNote={handleUpdateNote} />
    <div className="formNotes">
      <h2 className="headerUpdateNote">UPDATE NOTE FORM</h2>
      <UpdateNoteForm handleUpdateNote={handleUpdateNote} />
    </div>
  </div>
</div>
  );
};

export default App;