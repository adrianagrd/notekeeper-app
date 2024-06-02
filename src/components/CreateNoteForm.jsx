import notesService from "../services/notes/notesService";

export const CreateNoteForm = ({ id, handleUpdateNote }) => {
    const handleCreateNote = (event, id) => {
        event.preventDefault();
        notesService.createNotes(id)
        .then(() => notesService.getAllNotes())
        .then(({ notes }) => {
            handleUpdateNote(notes)
        });    
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleCreateNote} >
                <div className="notes-container">
                    <input type="text" name="name" placeholder="Enter name" required />
                    <input type="text" name="description" placeholder="Enter description" required />
                    <input type="checkbox" name="important" /> Important

                </div>
                <div className="notes-container">                
                    <select className="status-label" name="status">
                        <option value="pending">Pending</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <input className="status-label" type="date" name="dueDate" required />
                </div>
                <span>
                    <button type="submit" className="createNote" onClick={() => handleCreateNote(id)}>
                        <b>Create</b>
                    </button>
                </span>
            </form>
        </div>
    );
}