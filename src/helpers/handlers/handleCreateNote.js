import notesService from '../../services/notesService';

export const handleCreateNote = (event, handleUpdateNote) => {
    event.preventDefault();
    const newNote = {
        name: event.target.name.value,
        description: event.target.description.value,
        important: event.target.important.checked,
        status: event.target.status.value,
        due_date: event.target.due_date.value,
    };

    notesService
        .createNotes(newNote)
        .then(() => notesService.getAllNotes())
        .then(({ notes }) => {
            handleUpdateNote(notes);
        });
};
