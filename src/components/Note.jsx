import { DeleteNoteForm, UpdateNoteForm } from './index';

export const Note = ({ note }) => {
  return (
    <div className='noteContainer'>
      <ul>
        <li className='noteItem'>
          <div className='noteContent'>
            <div>
              <p>Name: {note.name}</p>
              <p>Description: {note.description}</p>
              <p>Important: {note.important.toString()}</p>
            </div>
            <div>
              <p>Status: {note.status}</p>
              <p>Due Date: {note.due_date}</p>
              <p>Created At: {new Date(note.created_at).toLocaleString()}</p>
            </div>
          </div>
          <div className='noteButtons'>
            <UpdateNoteForm key={note.id}/>
            <DeleteNoteForm key={note.id} id={note.id}/>
          </div>
        </li>
      </ul>
    </div>
  );
};