// TODO: Import API_ENDPOINT
import { API_ENDPOINT } from "./index.js";


// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
export const addNewBook = async (newTitle, newStart, newEnd) => {
  const response = await fetch(`${API_ENDPOINT}/books`, {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to add book: ${response.status}`);
  }

  const newBook = await response.json();

  return newBook;
};

export const getBooks = async () => {
  const response = await fetch(`${API_ENDPOINT}/books`);

  if (!response.ok) {
    throw new Error(`Failed to fetch books: ${response.status}`);
  }

  const books = await response.json();

  return books;
};

// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.
export const updateBook = async (id, newTitle, newStart, newEnd) => {
  const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to update book: ${response.status}`);
  }

  return response.status;
};

// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
export const deleteBook = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete book: ${response.status}`);
  }

  return response.status;
};