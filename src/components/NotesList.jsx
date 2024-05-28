import { Note } from './Note';

export const NotesList = ({ notes, setNotes }) => {
  return (
    <>
      <div className='tbody'>
        {notes.map((note) => (
          <Note key={note.id} note={note} setNotes={setNotes} />
        ))}
      </div>
    </>
  );
}