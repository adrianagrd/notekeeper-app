const BASE_API_URL = 'https://notekeeper-api-bx4z.onrender.com'; 


export const deleteNotes = async (id) => {
    await fetch(`${BASE_API_URL}/${id}`, {
      method: 'DELETE',
    });
  };