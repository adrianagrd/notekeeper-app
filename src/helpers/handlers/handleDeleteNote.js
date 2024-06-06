import notesService from '../../services/notesService';

export const handleDeleteNote = (id, handleUpdateNote) => {
    if (confirm(`Are you sure about deleting the note ?`)) {
        notesService
            .deleteNotes(id)
            .then(() => notesService.getAllNotes())
            .then(({ notes }) => {
                handleUpdateNote(notes);
            });
    }
};
