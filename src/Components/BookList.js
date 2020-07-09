import React from "react";
import BookItem from "./BookItem";
import books from "../books";
import { ListWrapper } from "../styles";

const BookList = () => {
  const bookList = books.map((book) => <BookItem book={book} />);
  return <ListWrapper>{bookList}</ListWrapper>;
};

export default BookList;
