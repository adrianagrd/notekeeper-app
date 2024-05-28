import notesService from "../services/notes/notesService";

export const UpdateNoteForm = ({ id }) => {
    const handleUpdateNote = () => {
        notesService.updateNotes(id);
    }
    
    return (
        <span>
            <button type="submit" className="updateNote" onClick={handleUpdateNote}>
                <b>Update</b> 
            </button>
        </span>
    );
};
    