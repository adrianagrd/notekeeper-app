import { Note } from './Note';

export const NotesList = ({ notes }) => {
  return (
    <>
      {notes ? notes.map((note) => (
        <Note key={note.id} note={note} />
      )) : null}
    </>
  );
}