import { NotesList, UpdateNoteForm } from './components';
import { CreateNoteForm } from './components/CreateNoteForm';
import { useNotes } from './hooks/useNotes';
import { useState } from 'react';

import './App.css';

const App = () => {
    const { notes, handleUpdateNote } = useNotes();
    const [editNote, setEditNote] = useState('');

    const handlesetEditNote = (id) => {
        setEditNote(id);
    };

    return (
        <div className="App">
            <div className="listNotes">
                <h2 className="headerTitle">NOTES</h2>
                <NotesList
                    notes={notes}
                    handleUpdateNote={handleUpdateNote}
                    handlesetEditNote={handlesetEditNote}
                />
            </div>
            <div className="formNotes">
                <h2 className="headerCreateNote">CREATE NOTE FORM</h2>
                <CreateNoteForm handleUpdateNote={handleUpdateNote} />
                <h2 className="headerCreateNote">UPDATE NOTE FORM</h2>
                <UpdateNoteForm
                    handleUpdateNote={handleUpdateNote}
                    editNote={editNote}
                    handlesetEditNote={handlesetEditNote}
                    notes={notes}
                />
            </div>
        </div>
    );
};

export default App;
