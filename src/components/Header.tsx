import { HeaderRoot } from "./styles";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const Header = (props: Props) => {
  return <HeaderRoot>{props.subtitle}</HeaderRoot>;
};

export default Header;
