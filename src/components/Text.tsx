import { useContext } from "react";
import { ResponseContext } from "../App";
import { TextRoot } from "./styles";

const Text = () => {
  const { description } = useContext(ResponseContext);

  return <TextRoot>{description}</TextRoot>;
};

export default Text;
