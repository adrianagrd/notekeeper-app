import { NotesList, CreateNoteForm } from "./components";  
import './App.css';
import { useNotes } from './hooks/useNotes';

const App = () => {
  const { notes } = useNotes();

  return (
    <>
      <div className="headerTitle">
        <h2>NOTES</h2>
        <CreateNoteForm />
      </div>
      <main className="main">
      <NotesList notes={notes} />
    </main>
    </>
  );
};

export default App;