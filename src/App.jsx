import { NotesList } from "./components";  
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
  </div>
</div>
  );
};

export default App;