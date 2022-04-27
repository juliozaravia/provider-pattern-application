import ListItem from "./ListItem";
import { ListLabel, ListRoot } from "./styles";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const List = (props: Props) => {
  return (
    <ListRoot>
      <ListLabel>Total: {props.data.length} items</ListLabel>
      <ListItem {...props} />
    </ListRoot>
  );
};

export default List;
