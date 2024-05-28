import notesService from "../services/notes/notesService";
import { useState } from "react";

export const CreateNoteForm = ({ setNotes }) => {
    const [newNote, setNewNote] = useState('');

    const handleCreateNote = async (event) => {
        event.preventDefault();
        const noteToAdd = {
            content: newNote,
            important: false,
        };
        const returnedNote = await notesService.createNotes(noteToAdd);
        setNotes((prevNotes) => [...prevNotes, returnedNote]);
        setNewNote('');
    };

    return (
        <form onSubmit={handleCreateNote}>
            <input
                type="text"
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    );
}
    