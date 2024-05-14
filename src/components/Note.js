import notesService from '../services/notes/notesService';

export const Note = ({ note }) => {

  const handleDeleteNote = () => {
    if (confirm(`Are you sure about deleting the note ?`)) {
      notesService.deleteNote();
    }
  }
  
  return (
    <div>
      <p>{note.content}</p>
      <button>Update Note</button>
      <button onClick={handleDeleteNote}>Delete Note</button>
    </div>
  );
};