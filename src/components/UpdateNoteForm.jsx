import notesService from '../services/notesService';

export const UpdateNoteForm = ({
    handleUpdateNote,
    editNote,
    handlesetEditNote,
    notes,
}) => {
    const notetoEdit = notes.find((note) => note.id === editNote);

    const handleUpdateNotes = (event, id) => {
        event.preventDefault();

        notesService
            .updateNotes(id)
            .then(() => notesService.getAllNotes())
            .then(({ notes }) => {
                handleUpdateNote(notes);
            })
            .then(() => {
                handlesetEditNote('');
            });
    };

    if (!editNote) {
        return null;
    }

    return (
        <form onSubmit={handleUpdateNotes}>
            <div className="notes-container">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={notetoEdit ? notetoEdit.name : ''}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={notetoEdit ? notetoEdit.description : ''}
                    required
                />
                <input
                    type="checkbox"
                    name="important"
                    checked={notetoEdit ? notetoEdit.important : ''}
                />
                Important
            </div>
            <div className="notes-container">
                <select
                    name="status"
                    value={
                        notetoEdit && notetoEdit.status ? notetoEdit.status : ''
                    }
                >
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <input
                    type="date"
                    name="dueDate"
                    required
                    value={
                        notetoEdit && notetoEdit.dueDate
                            ? notetoEdit.dueDate
                            : ''
                    }
                />
            </div>
            <span>
                <button
                    type="submit"
                    className="updateNote"
                    onClick={() => handleUpdateNotes(editNote)}
                >
                    <b>Update</b>
                </button>
            </span>
        </form>
    );
};
