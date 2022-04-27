import { ListItemLink, ListItemRoot } from "./styles";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const ListItem = (props: Props) => {
  return (
    <>
      {props.data.map((language) => (
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
