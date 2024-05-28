import { NotesList } from "./components";  
import './App.css';
import { useNotes } from './hooks/useNotes';

const App = () => {
  const { notes } = useNotes();

  return (
    <table className="notesTable">
      <h2 className="headerTitle">NOTES</h2>
      <NotesList notes={notes} />
    </table>
  );
};

export default App;