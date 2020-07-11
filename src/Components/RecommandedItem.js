import React from "react";
import { ItemWrapper } from "../styles";

const RecommandedItem = ({ rBook }) => {
  return (
    <>
      <ItemWrapper>
        <img src={rBook.image} alt={rBook.title} />
        <p>{rBook.title}</p>
        <p>{rBook.author}</p>
        <p>{rBook.price} KD</p>
      </ItemWrapper>
    </>
  );
};

export default RecommandedItem;
