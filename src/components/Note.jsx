import { DeleteNoteForm, UpdateNoteForm } from './index';

export const Note = ({ note, handleUpdateNote }) => {
  return (
    
      <div className='noteItem'>
        <p>Name: {note.name}</p>
        <p>Description: {note.description}</p>
        <p>Important: {note.important ? note.important.toString() : ''}</p>        
        <p>Status: {note.status}</p>
        <p>Due Date: {note.due_date}</p>
        <p>Created At: {new Date(note.created_at).toLocaleString()}</p>
        <div className='noteButtons'>
          <UpdateNoteForm id={note.id} />
          <DeleteNoteForm id={note.id} handleUpdateNote={handleUpdateNote} />
        </div>
      </div>
  );
};