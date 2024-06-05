import notesService from '../services/notesService';
import { useState, useEffect } from 'react';

export const UpdateNoteForm = ({
    handleUpdateNote,
    editNote,
    handleSetEditNote,
    notes,
}) => {
    const notetoEdit = notes.find((note) => note.id === editNote);
    const [updatedNote, setUpdatedNote] = useState(notetoEdit || {});

    useEffect(() => {
        setUpdatedNote(notetoEdit || {});
    }, [editNote, notetoEdit]);

    const handleInputChange = (event) => {
        setUpdatedNote({
            ...updatedNote,
            [event.target.name]: event.target.value,
        });
    };

    console.log(updatedNote);

    const handleUpdateNotes = (event, id) => {
        event.preventDefault();
        notesService
            .updateNotes(id, updatedNote)
            .then(() => notesService.getAllNotes())
            .then(({ notes }) => {
                handleUpdateNote(notes);
            })
            .then(() => {
                handleSetEditNote('');
            });
    };

    return (
        <form onSubmit={handleUpdateNotes}>
            <div className="notes-container">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={updatedNote.name || ''}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={updatedNote.description || ''}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="checkbox"
                    name="important"
                    checked={updatedNote.important || false}
                    onChange={handleInputChange}
                />
                Important
            </div>
            <div className="notes-container">
                <select
                    name="status"
                    value={updatedNote.status || ''}
                    onChange={handleInputChange}
                >
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <input
                    type="date"
                    name="dueDate"
                    required
                    value={updatedNote.due_date || ''}
                    onChange={handleInputChange}
                />
            </div>
            <span>
                <button
                    type="submit"
                    className="updateNote"
                    onClick={(event) => handleUpdateNotes(event, editNote)}
                >
                    <b>Update</b>
                </button>
            </span>
        </form>
    );
};
