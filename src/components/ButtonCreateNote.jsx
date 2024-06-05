import notesService from '../services/notesService';

export const ButtonCreateNote = ({ id }) => {
    const handleCreateNote = () => {
        notesService.createNote(id);
    };

    return (
        <button type="submit" className="createNote" onClick={handleCreateNote}>
            <b>CREATE NOTE</b>
        </button>
    );
};
