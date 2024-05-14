import { DeleteNoteForm, UpdateNoteForm } from './index';

export const Note = ({ note }) => {
  return (
    <ul className='noteContainer'>
      <li className='noteItem'>
        <div className='noteContent'>
          <p>{note.content}</p>
        </div>
        <div className='noteButtons'>
          <UpdateNoteForm />
          <DeleteNoteForm />
        </div>
      </li>
    </ul>
  );
};