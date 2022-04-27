import List from "./List";
import { SidebarLabel, SidebarRoot } from "./styles";

interface Props {
  data: string[];
  description: string;
  image: string;
  subtitle: string;
  title: string;
}

const Sidebar = (props: Props) => {
  return (
    <SidebarRoot>
      <SidebarLabel>{`${props.title} list:`}</SidebarLabel>
      <List {...props} />
    </SidebarRoot>
  );
};

export default Sidebar;
