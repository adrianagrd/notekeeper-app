const BASE_API_URL = 'https://notekeeper-api-bx4z.onrender.com'; 


export const getAll = async () => {
    const response = await fetch(BASE_API_URL);
    return response.json();
  };