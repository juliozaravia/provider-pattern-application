import { useContext } from "react";
import { ResponseContext } from "../App";
import Text from "./Text";
import { BlockRoot, ImageLabel } from "./styles";

const Block = () => {
  const { image } = useContext(ResponseContext);

  return (
    <BlockRoot>
      <Text />
      <ImageLabel src={image} />
    </BlockRoot>
  );
};

export default Block;
