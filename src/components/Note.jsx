import { DeleteNoteForm } from './index';

export const Note = ({ note, handleUpdateNote, handlesetEditNote }) => {
    return (
        <div className="noteItem">
            <p>Name: {note.name}</p>
            <p>Description: {note.description}</p>
            <p>Important: {note.important ? note.important.toString() : ''}</p>
            <p>Status: {note.status}</p>
            <p>DueDate: {note.due_date}</p>
            <p>Created At: {new Date(note.created_at).toLocaleString()}</p>
            <div className="noteButtons">
                <button
                    className="updateNote"
                    id={note.id}
                    onClick={() => handlesetEditNote(note.id)}
                >
                    Update
                </button>
                <DeleteNoteForm
                    id={note.id}
                    handleUpdateNote={handleUpdateNote}
                />
            </div>
        </div>
    );
};
