import { DeleteNoteForm, UpdateNoteForm } from './index';

export const Note = ({ note }) => {
  
  return (
    <div>
      <p>{note.content}</p>
      <UpdateNoteForm />
      <DeleteNoteForm />
    </div>
  );
};