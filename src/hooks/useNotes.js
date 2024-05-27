import { useEffect, useState } from 'react';
import notesService from '../services/notes/notesService';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesService.getAllNotes().then((data) => {
        setNotes(data.notes);
    })
  }, []);

  return notes;
};