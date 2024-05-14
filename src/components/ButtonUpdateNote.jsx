import notesService from "../services/notes/notesService"

export const UpdateNoteForm = () => {

    const handleUpdateNote = () => {
        if (confirm(`Are you sure about updating the note ?`)) {
            notesService.updateNotes();
        }
    }

    return (
        <span>
            <button type="submit" className="updateNote" onClick={ handleUpdateNote }>
                <b>Update Note</b>
            </button>
        </span>
    )
}