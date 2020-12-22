let books = [
  {
    id: "1",
    title: "Homo Sapiens",
    price: 15.19,
    authorId: "1"
  },
  {
    id: "2",
    title: "Homo Deus",
    price: 18.00,
    authorId: "1"
  },
  {
    id: "3",
    title: "21 Lessons for the 21st Century",
    price: 20.00,
    authorId: "1"
  },
];

let authors = [
  {
    id: "1",
    firstName: "Yuval",
    lastName: "Noah Harari",
  },
];

export const getBook = (id: string) => {
  const book = books.find(book => book.id === id);
  return book;
}

export const getBookAndAuthor = (id: string) => {
  const book = books.find(book => book.id === id);
  if (book !== null) {
    const author = authors.find(author => author.id === book.authorId);
    return {
      ...book,
      author
    }
  }
  return book;
}

export const getBooksByAuthor = (authorId) => {
  return books.filter(b => b.authorId === authorId);
}

export const getAuthor = (authorId) => {
  return authors.find(a => a.id === authorId);
}

export const deleteBook = (id) => {
  const book = books.find(book => book.id === id);
  books = books.filter(a => {
    return a.id !== id;
  })
  return book;
}
