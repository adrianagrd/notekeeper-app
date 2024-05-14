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
      <button className="createNote" onClick={handleCreateNote}>Create Note</button>
    </form>
  );
};