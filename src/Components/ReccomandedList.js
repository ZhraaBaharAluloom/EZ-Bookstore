import React from "react";
import RecommandedItem from "./RecommandedItem";
import rBooks from "../rBooks";
import { ListWrapper } from "../styles";

const RecommandedList = ({ book, rBook }) => {
  const recommandedList = rBooks
    .filter(
      (rBook) => rBook.author === book.author && book.title !== rBook.title
    )
    .map((rBook) => <RecommandedItem key={rBook.id} rBook={rBook} />);

  // const plantList = plants
  // .filter((plant) => plant.name.toLowerCase().includes(query.toLowerCase()))
  // .map((plant) => (
  //   <PlantItem
  //     plant={plant}
  //     key={plant.id}
  //     deletePlant={deletePlant}
  //     selectPlant={selectPlant}
  // />

  return <ListWrapper>{recommandedList}</ListWrapper>;
};

export default RecommandedList;
