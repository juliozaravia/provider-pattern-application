import { useContext } from "react";
import { ResponseContext } from "../App";
import { HeaderRoot } from "./styles";

const Header = () => {
  const { subtitle } = useContext(ResponseContext);

  return <HeaderRoot>{subtitle}</HeaderRoot>;
};

export default Header;
