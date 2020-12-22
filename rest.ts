import express = require('express');
import * as db from './db';

export const getRestRoutes = () => {
  const router = express.Router();
  router.get("/hello", (_req, resp) => {
    resp.send("Hello World!");
  });

  router.get("/books/:id", (req, resp) => {
    const bookId = req.params.id;
    const book = db.getBookAndAuthor(bookId);
    resp.status(200).send(book);
  })

  router.get("/authors/:id/", (req, resp) => {
    const authorId = req.params.id;
    const author = db.getAuthor(authorId);
    resp.status(200).send(author);
  })

  router.get("/authors/:id/books", (req, resp) => {
    const authorId = req.params.id;
    const books = db.getBooksByAuthor(authorId);
    resp.status(200).send(books);
  })

  router.delete("/books/:id", (req, resp) => {
    const bookId = req.params.id;
    const deletedBook = db.deleteBook(bookId);
    resp.status(200).send(deletedBook);
  })
  return router;
};