import React from "react";
import BookItem from "./BookItem";
import books from "../books";
import { ListWrapper } from "../styles";

const BookList = ({ book }) => {
  const bookList = books.map((book) => <BookItem key={book.key} book={book} />);
  return <ListWrapper>{bookList}</ListWrapper>;
};

export default BookList;
