import { makeExecutableSchema } from '@graphql-tools/schema';
import * as db from './db';

const typeDefs = `
type Book {
  id: String
  title: String
  price: Float
  authorId: String
  author: Author
}
type Author {
  id: String
  firstName: String
  lastName: String
  books: [Book]
}
type Query {
  hello: String
  book(id: String!): Book
  author(id: String!): Author
}
type Mutation {
  deleteBook(id: String!): Book
}
`;

const resolvers = {
  Mutation: {
    deleteBook: (_, params) => {
      return db.deleteBook(params.id);
    }
  },
  Query: {
    book: (_, params) => {
      return db.getBook(params.id);
    },
    author: (_, params) => {
      return db.getAuthor(params.id);
    },
    hello: () => {
      return "Hello World!";
    },
  },
  Author: {
    books: author => db.getBooksByAuthor(author.id)
  },
  Book: {
    author: (book) => {
      return db.getAuthor(book.authorId)
    }
  }
};

export const getSchema = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  return schema;
}