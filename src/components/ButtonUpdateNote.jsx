export const ButtonUpdateNote = ({ handleUpdateNotes, editNote }) => {
    return (
        <button
            type="submit"
            className="updateNoteButton"
            onClick={(event) => handleUpdateNotes(event, editNote)}
        >
            <b>UPDATE</b>
        </button>
    );
};
