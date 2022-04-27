import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { Container } from "./components/styles";

const App = () => {
  const response = {
    data: ["JavaScript", "Python", "Java", "C++"],
    description: "A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.",
    image: "https://memegenerator.net/img/instances/60297574/welcome-to-computer-programming.jpg",
    subtitle: "Everything you need to know step by step!",
    title: "Programming languages",
  };

  return (
    <Container>
      <Sidebar {...response} />
      <Content {...response} />
    </Container>
  );
};

export default App;
