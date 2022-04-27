import { BlockRoot, ImageLabel } from "./styles";
import Text from "./Text";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const Block = (props: Props) => {
  return (
    <BlockRoot>
      <Text {...props} />
      <ImageLabel src={props.image} />
    </BlockRoot>
  );
};

export default Block;
