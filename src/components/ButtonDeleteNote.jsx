import notesService from '../services/notes/notesService';

export const DeleteNoteForm = ({ id }) => {

    const handleDeleteNote = () => {
        if (confirm(`Are you sure about deleting the note ?`)) {
          notesService.deleteNotes(id);
        }
      }

    return (
        <span>
            <button type="submit" className="deleteNote" onClick={handleDeleteNote}>
                <b>Delete Note</b>
            </button>
        </span>
    )
}