import { useContext } from "react";
import { ResponseContext } from "../App";
import ListItem from "./ListItem";
import { ListLabel, ListRoot } from "./styles";

const List = () => {
  const { data } = useContext(ResponseContext);

  return (
    <ListRoot>
      <ListLabel>Total: {data.length} items</ListLabel>
      <ListItem />
    </ListRoot>
  );
};

export default List;
