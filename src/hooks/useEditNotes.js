import { useState } from 'react';

export const useEditNote = () => {
    const [editNote, setEditNote] = useState('');

    const handleSetEditNote = (id) => {
        setEditNote(id);
    };

    return { editNote, handleSetEditNote };
};
