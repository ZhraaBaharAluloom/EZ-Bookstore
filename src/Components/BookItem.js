import React from "react";
import { ItemWrapper } from "../styles";

const BookItem = ({ book }) => {
  return (
    <ItemWrapper>
      <img src={book.image} alt={book.title} />
      <p>{book.title}</p>
    </ItemWrapper>
  );
};

export default BookItem;
