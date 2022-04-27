import { TextRoot } from "./styles";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const Text = (props: Props) => {
  return <TextRoot>{props.description}</TextRoot>;
};

export default Text;
