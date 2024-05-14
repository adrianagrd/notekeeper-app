import notesService from "../services/notes/notesService";

export const CreateNoteForm = ({ id }) => {

  const handleCreateNote = () => {
    if(confirm(`Are you sure about creating the note ?`)) {
      notesService.createNote(id);
    }
  }

  return (
    <span>
      <button type="submit" className="createNote" onClick={handleCreateNote}>
          <b>Create Note</b>
      </button>
    </span>
    
  );
};