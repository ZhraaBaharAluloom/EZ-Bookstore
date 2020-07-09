import React from "react";
import books from "../books";
import { Link, Redirect, useParams } from "react-router-dom";

//Styles
import { DetailWrapper } from "../styles";

const BookDetail = ({ book }) => {
  const { bookSlug } = useParams();
  book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;

  return (
    <DetailWrapper>
      <img src={book.image} alt={book.title} />
      <p>{book.title}</p>
      <p> {book.released}</p>
      <p> {book.genre}</p>
      <p> {book.author}</p>
      <p> {book.price}</p>
    </DetailWrapper>
  );
};

export default BookDetail;
