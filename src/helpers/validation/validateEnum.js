export const validateEnum = (note) => {
    const noteStatus = note.status;

    if (
        noteStatus !== 'completed' &&
        noteStatus !== 'in progress' &&
        noteStatus !== 'pending'
    )
        return false;

    return true;
};
