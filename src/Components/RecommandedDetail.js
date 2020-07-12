import React from "react";
import { useParams, Redirect } from "react-router";
import rBooks from "../rBooks";
import { RbookDetail } from "../styles";

const RecommandedDetail = ({ rBook }) => {
  const { rBookSlug } = useParams();
  rBook = rBooks.find((rBook) => rBook.slug === rBookSlug);
  if (!rBook) return <Redirect to="/rBooks" />;
  return (
    <RbookDetail>
      <img src={rBook.image} alt={rBook.title} />
      <p>Title: {rBook.title}</p>
      <p>Released: {rBook.released}</p>
      <p>Genre: {rBook.genre}</p>
      <p>Author: {rBook.author}</p>
      <p>Price: {rBook.price} KD</p>
    </RbookDetail>
  );
};

export default RecommandedDetail;
