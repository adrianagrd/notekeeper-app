import notesService from "../services/notes/notesService";

export const CreateNoteForm = () => {

  const handleCreateNote = () => {
    if(confirm(`Are you sure about creating the note ?`)) {
      notesService.createNote();
    }
  }

  return (
    <form>
      {}
      <button onClick={handleCreateNote}>Create Note</button>
    </form>
  );
};