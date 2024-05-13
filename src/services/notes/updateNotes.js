const BASE_API_URL = 'https://notekeeper-api-bx4z.onrender.com'; 

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