import notesService from "../services/notes/notesService";

export const DeleteNoteForm = ({ id, setNotes }) => {
    const handleDeleteNote = (id) => {
        if (confirm(`Are you sure about deleting the note ?`)) {
            notesService.deleteNotes(id)
            .then(() => notesService.getAllNotes())
            .then(({ notes }) => {
                setNotes(notes)
            });
        }
    }       

    return (
        <span>
            <button type="submit" className="deleteNote" onClick={() => handleDeleteNote(id)}>
                <b>Delete</b> 
            </button>
        </span>
    );
}