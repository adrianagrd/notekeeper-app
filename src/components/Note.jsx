import { DeleteNoteForm, UpdateNoteForm } from './index';
import { useState } from 'react';

export const Note = ({ note, handleUpdateNote, handlesetEditNote }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const handleUpdateClick = (id) => {
        handlesetEditNote(id);
        setShowUpdateForm(true);
    };
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
                    onClick={() => handleUpdateClick(note.id)}
                >
                    Update
                </button>
                {showUpdateForm && (
                    <UpdateNoteForm
                        id={note.id}
                        handleUpdateNote={handleUpdateNote}
                    />
                )}
                <DeleteNoteForm
                    id={note.id}
                    handleUpdateNote={handleUpdateNote}
                />
            </div>
        </div>
    );
};
