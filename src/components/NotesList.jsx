import { Note } from './Note';

export const NotesList = ({ notes }) => {
  return (
    <>
      <tbody>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </tbody>
    </>
  );
}