import { Note } from './Note';

export const NotesList = ({ notes }) => {
  return (
    <>
      <div className='tbody'>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}