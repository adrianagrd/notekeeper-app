import notesService from "../services/notes/notesService";
import { useState } from "react";

export const UpdateNoteForm = ({ id, setNotes }) => {
    const [newNote, setNewNote] = useState('');

    const handleUpdateNote = async (event) => {
        event.preventDefault();
        const noteToUpdate = {
            content: newNote,
            important: false,
        };
        const returnedNote = await notesService.updateNotes(id, noteToUpdate);
        setNotes((prevNotes) => prevNotes.map((note) => note.id !== id ? note : returnedNote));
        setNewNote('');
    };

    return (
        <form onSubmit={handleUpdateNote}>
            <input
                type="text"
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
}