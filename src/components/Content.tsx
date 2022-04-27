import Block from "./Block";
import Header from "./Header";
import { ContentRoot, TitleLabel } from "./styles";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const Content = (props: Props) => {
  return (
    <ContentRoot>
      <TitleLabel>{`What are ${props.title.toLocaleLowerCase()}?`}</TitleLabel>
      <Header {...props} />
      <Block {...props} />
    </ContentRoot>
  );
};

export default Content;
