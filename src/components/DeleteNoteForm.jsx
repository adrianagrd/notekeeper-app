import notesService from '../services/notesService';

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
        <button
            type="submit"
            className="deleteNote"
            onClick={() => handleDeleteNote(id)}
        >
            <b>DELETE</b>
        </button>
    );
};
