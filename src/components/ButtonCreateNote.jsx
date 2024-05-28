import notesService from "../services/notes/notesService";

export const CreateNoteForm = ({ id }) => {

  const handleCreateNote = () => {
      notesService.createNote(id);
    
  }

  return (
    <span>
      <button type="submit" className="createNote" onClick={handleCreateNote}>
          <b>Create Note</b>
      </button>
    </span>
    
  );
};