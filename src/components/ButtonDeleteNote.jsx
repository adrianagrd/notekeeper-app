import notesService from '../services/notes/notesService';

export const DeleteNoteForm = () => {

    const handleDeleteNote = () => {
        if (confirm(`Are you sure about deleting the note ?`)) {
          notesService.deleteNote();
        }
      }

    return (
        <span>
            <button onClick={handleDeleteNote}>
                <b>Delete Note</b>
            </button>
        </span>
    )
}