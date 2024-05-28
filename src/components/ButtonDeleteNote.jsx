import notesService from '../services/notes/notesService';

export const DeleteNoteForm = ({ id }) => {

    const handleDeleteNote = async () => {
        if (confirm(`Are you sure about deleting the note ?`)) {
          await notesService.deleteNotes(id);
          await notesService.getAllNotes();
        }
    }

    return (
        <span>
            <button type="submit" className="deleteNote" onClick={handleDeleteNote}>
                <b>Delete</b> 
            </button>
        </span>
    )
}