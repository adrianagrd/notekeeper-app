import { useEffect, useState } from 'react';
import notesService from '../services/notes/notesService';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleUpdateNote = (newNotes) => {
    setNotes(newNotes);
  }

  useEffect(() => {
    notesService.getAllNotes().then((data) => {
        handleUpdateNote(data.notes);
    })
  }, []);

  return {notes};
};