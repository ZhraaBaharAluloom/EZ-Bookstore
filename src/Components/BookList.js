import React, { useState } from "react";
import BookItem from "./BookItem";
import books from "../books";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";

const BookList = ({ books }) => {
  const [query, setQuery] = useState("");
  const bookList = books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem key={book.id} book={book} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />

      <ListWrapper>{bookList}</ListWrapper>
    </>
  );
};

export default BookList;
