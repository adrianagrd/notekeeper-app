import { useEffect, useState } from 'react';
import notesService from '../services/notesService';

export const useEditNote = () => {
    const [editNote, setEditNote] = useState('');

    const handleSetEditNote = (id) => {
        setEditNote(id);
    };

    useEffect(() => {
        notesService.getAllNotes().then((data) => {
            handleSetEditNote(data.notes);
        });
    }, []);

    return { editNote, handleSetEditNote };
};
