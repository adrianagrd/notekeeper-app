export const validateType = (note) => {
    if (typeof note.due_date === 'string') {
        return true;
    }
    return false;
};
