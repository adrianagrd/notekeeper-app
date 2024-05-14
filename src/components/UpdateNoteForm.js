import notesService from "../services/notes/notesService"

export const UpdateNoteForm = () => {

    const handleUpdateNote = () => {
        if (confirm(`Are you sure about deleting the note ?`)) {
            notesService.updateNotes();
        }
    }

    return (
        <span>
            <button onClick={ handleUpdateNote }>
                <b>Update Note</b>
            </button>
        </span>
    )
}