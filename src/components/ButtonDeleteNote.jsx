export const ButtonDeleteNote = ({
    id,
    handleUpdateNote,
    handleDeleteNote,
}) => {
    return (
        <button
            type="submit"
            className="deleteNote"
            onClick={() => handleDeleteNote(id, handleUpdateNote)}
        >
            <b>DELETE</b>
        </button>
    );
};
