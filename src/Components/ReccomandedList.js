import React from "react";
import RecommandedItem from "./RecommandedItem";
import spencerJbooks from "../spencerJbooks";
import { ListWrapper } from "../styles";

const RecommandedList = ({ spencerJbook }) => {
  const recommandedList = spencerJbooks.map((spencerJbook) => (
    <RecommandedItem key={spencerJbook.id} spencerJbook={spencerJbook} />
  ));
  return <ListWrapper>{recommandedList}</ListWrapper>;
};

export default RecommandedList;
