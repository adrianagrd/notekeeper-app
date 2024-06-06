import { ButtonCreateNote } from './ButtonCreateNote';
import { handleCreateNote } from '../helpers/handlers';

export const CreateNoteForm = ({ handleUpdateNote }) => {
    return (
        <form onSubmit={() => handleCreateNote(handleUpdateNote)}>
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
            <ButtonCreateNote className="createNote" />
        </form>
    );
};
