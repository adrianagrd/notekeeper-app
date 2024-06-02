import { Note } from './Note';

export const NotesList = ({ notes, handleUpdateNote, handlesetEditNote }) => {
    return (
        <>
            <div className="tbody">
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        handleUpdateNote={handleUpdateNote}
                        handlesetEditNote={handlesetEditNote}
                    />
                ))}
            </div>
        </>
    );
};
