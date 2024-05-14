const BASE_API_URL = 'https://notekeeper-api-bx4z.onrender.com'; 

export const getAll = async () => {
  const response = await fetch(BASE_API_URL);
  return response.json();
};

export const create = async (newNote) => {
  const response = await fetch(BASE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  });
  return response.json();
};

export const deleteNotes = async (id) => {
  await fetch(`${BASE_API_URL}/${id}`, {
    method: 'DELETE',
  });
};

export const updateNotes = async (id, updatedNote) => {
  const response = await fetch(`${BASE_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedNote),
  });
  return response.json();
};