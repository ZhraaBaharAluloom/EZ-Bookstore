import React from "react";
import { Link } from "react-router-dom";

//Styles
import { ItemWrapper } from "../styles";

const BookItem = ({ book }) => {
  return (
    <>
      <ItemWrapper>
        <Link to={`/books/${book.slug}`}>
          <img src={book.image} alt={book.title} />
        </Link>
        <p>{book.title}</p>
        <p>Price: {book.price}</p>
      </ItemWrapper>
    </>
  );
};

export default BookItem;
