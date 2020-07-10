import React from "react";
import { Link } from "react-router-dom";

//Styles
import { ItemWrapper } from "../styles";

const BookItem = ({ book }) => {
  return (
    <>
      <ItemWrapper>
        <img src={book.image} alt={book.title} />
        <p>{book.title}</p>
        <Link to={`/books/${book.slug}`}>
          <p>Details .. </p>
        </Link>
      </ItemWrapper>
    </>
  );
};

export default BookItem;