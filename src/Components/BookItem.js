import React, { useState } from "react";
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
        <p className="titleStyle">{book.title}</p>
      </ItemWrapper>
    </>
  );
};

export default BookItem;
