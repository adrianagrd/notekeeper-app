const { VITE_API_URL: BASE_URL } = import.meta.env;
const resourcePath = 'notes';
const urlToFetch = `${BASE_URL}/${resourcePath}`;

const getAllNotes = async () => {
    const response = await globalThis.fetch(urlToFetch);
    const data = await response.json();
    return data;
};

const createNotes = async (newNote) => {
    const response = await fetch(urlToFetch, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
    });
    return response.json();
};

const deleteNotes = async (id) => {
    const response = await fetch(`${urlToFetch}/${id}`, {
        method: 'DELETE',
    });

    return response.json();
};

const updateNotes = async (id, updatedNote) => {
    const response = await fetch(`${urlToFetch}/${id}`, {
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
};
