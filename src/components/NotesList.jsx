import { Note } from './Note';

export const NotesList = ({ notes, handleUpdateNote, handleSetEditNote }) => {
    return (
        <>
            <div className="tbody">
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        handleUpdateNote={handleUpdateNote}
                        handleSetEditNote={handleSetEditNote}
                    />
                ))}
            </div>
        </>
    );
};
