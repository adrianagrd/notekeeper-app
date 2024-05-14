const BASE_API_URL = 'https://notekeeper-api-bx4z.onrender.com'; 

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