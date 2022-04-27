import { useContext } from "react";
import { ResponseContext } from "../App";
import { ListItemLink, ListItemRoot } from "./styles";

const ListItem = () => {
  const { data } = useContext(ResponseContext);

  return (
    <>
      {data.map((language) => (
        <ListItemRoot>
          <ListItemLink href={`https://www.google.com/search?q=${language.toLocaleLowerCase()}`} target="_blank">
            {language}
          </ListItemLink>
        </ListItemRoot>
      ))}
    </>
  );
};

export default ListItem;
