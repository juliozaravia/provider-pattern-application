import { useContext } from "react";
import { ResponseContext } from "../App";
import Block from "./Block";
import Header from "./Header";
import { ContentRoot, TitleLabel } from "./styles";

const Content = () => {
  const { title } = useContext(ResponseContext);

  return (
    <ContentRoot>
      <TitleLabel>{`What are ${title.toLocaleLowerCase()}?`}</TitleLabel>
      <Header />
      <Block />
    </ContentRoot>
  );
};

export default Content;
