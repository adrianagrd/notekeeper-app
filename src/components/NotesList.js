import Note from './Note';

export const NotesList = ({ notes }) => {
  return (
    <div>
      {notes.length > 0 ? notes.map(note => <Note key={note.id} note={note} />) : <p>Empty List Notes</p>}
    </div>
  );
};