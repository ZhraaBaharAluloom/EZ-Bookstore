import React from "react";
import { ItemWrapper } from "../styles";
import { Link } from "react-router-dom";

const RecommandedItem = ({ rBook }) => {
  return (
    <>
      <ItemWrapper>
        <Link to={`/rBooks/${rBook.slug}`}>
          <img src={rBook.image} alt={rBook.title} />
        </Link>
        <p>Title:{rBook.title}</p>
        <p>Author: {rBook.author} </p>
        <p>Price: {rBook.price} KD </p>
      </ItemWrapper>
    </>
  );
};

export default RecommandedItem;
