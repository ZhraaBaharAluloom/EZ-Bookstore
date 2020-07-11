import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import { ItemWrapper } from "../styles";

const BookItem = ({ book }) => {
  return (
    <>
      <ItemWrapper>
        <img src={book.image} alt={book.title} />
        <p className="titleStyle">{book.title}</p>
        <Link to={`/books/${book.slug}`}>
          <p className="detailStyle">Details .. </p>
        </Link>
      </ItemWrapper>
    </>
  );
};

export default BookItem;
