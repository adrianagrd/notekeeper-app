import notesService from '../services/notesService';
import { ButtonDeleteNote } from './ButtonDeleteNote';

export const DeleteNoteForm = ({ id, handleUpdateNote }) => {
    const handleDeleteNote = (id) => {
        if (confirm(`Are you sure about deleting the note ?`)) {
            notesService
                .deleteNotes(id)
                .then(() => notesService.getAllNotes())
                .then(({ notes }) => {
                    handleUpdateNote(notes);
                });
        }
    };

    return (
        <ButtonDeleteNote
            id={id}
            handleUpdateNote={handleUpdateNote}
            handleDeleteNote={handleDeleteNote}
        />
    );
};
