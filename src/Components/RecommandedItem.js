import React from "react";
import { ItemWrapper } from "../styles";

const RecommandedItem = ({ spencerJbook }) => {
  return (
    <>
      <ItemWrapper>
        <img src={spencerJbook.image} alt={spencerJbook.title} />
        <p>{spencerJbook.title}</p>
        <p>{spencerJbook.author}</p>
        <p>{spencerJbook.price} KD</p>
      </ItemWrapper>
    </>
  );
};

export default RecommandedItem;
