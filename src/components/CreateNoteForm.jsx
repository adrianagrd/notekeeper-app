import notesService from '../services/notesService';

export const CreateNoteForm = ({ handleUpdateNote }) => {
    const handleCreateNote = (event) => {
        event.preventDefault();
        const newNote = {
            name: event.target.name.value,
            description: event.target.description.value,
            important: event.target.important.checked,
            status: event.target.status.value,
            due_date: event.target.due_date.value,
        };

        notesService
            .createNotes(newNote)
            .then(() => notesService.getAllNotes())
            .then(({ notes }) => {
                handleUpdateNote(notes);
            });
    };

    return (
        <form onSubmit={handleCreateNote}>
            <div className="notes-container">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    required
                />
                <input type="checkbox" name="important" /> Important
            </div>
            <div className="notes-container">
                <select name="status">
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <input type="date" name="due_date" required />
            </div>
            <button type="submit" className="createNote">
                <b>CREATE</b>
            </button>
        </form>
    );
};
