import notesService from "../services/notes/notesService";

export const UpdateNoteForm = ({ id, handleUpdateNote }) => {


    const handleUpdateNotes = (event, id) => {
        event.preventDefault();
        notesService.updateNotes(id)
        .then(() => notesService.getAllNotes())
        .then(({ notes }) => {
            handleUpdateNote(notes);
        });
    };
    
    return (
        <span>
            <button type="submit" className="updateNote" onClick={() => handleUpdateNotes(id)}>
                <b>Update</b>
            </button>
        </span>
    );
};