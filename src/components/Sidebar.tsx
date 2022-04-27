import { useContext } from "react";
import { ResponseContext } from "../App";
import List from "./List";
import { SidebarLabel, SidebarRoot } from "./styles";

const Sidebar = () => {
  const { title } = useContext(ResponseContext);

  return (
    <SidebarRoot>
      <SidebarLabel>{`${title} list:`}</SidebarLabel>
      <List />
    </SidebarRoot>
  );
};

export default Sidebar;
