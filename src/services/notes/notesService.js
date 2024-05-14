const BASE_API_URL = 'https://notekeeper-api-bx4z.onrender.com'; 

 const getAllNotes = async () => {
  const response = await fetch(BASE_API_URL);
  return response.json();
};

 const createNotes = async (newNote) => {
  const response = await fetch(BASE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  });
  return response.json();
};

 const deleteNotes = async (id) => {
  await fetch(`${BASE_API_URL}/${id}`, {
    method: 'DELETE',
  });
};

 const updateNotes = async (id, updatedNote) => {
  const response = await fetch(`${BASE_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedNote),
  });
  return response.json();
};

export default {
  getAllNotes,
  createNotes,
  deleteNotes,
  updateNotes,
}