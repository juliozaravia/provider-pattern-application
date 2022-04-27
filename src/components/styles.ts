import styled from "styled-components";

export const Container = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "20px auto",
  width: "70%",
});

export const SidebarRoot = styled.div({
  flex: 1,
});

export const ListRoot = styled.ul({
  margin: 0,
  padding: 0,
});

export const ListItemRoot = styled.li({
  flex: 1,
  listStyle: "none",
});

export const ListItemLink = styled.a({
  background: "#aaa0fe",
  borderBottom: "1px solid #8b7ffd",
  color: "#ffffff",
  display: "block",
  padding: 15,
  textDecoration: "none",
  "&:hover": {
    background: "#9b8ffd",
  },
});

export const ContentRoot = styled.div({
  background: "#ffffff",
  display: "flex",
  flex: 3,
  flexDirection: "column",
  padding: "20px 30px",
});

export const HeaderRoot = styled.h2({
  background: "#4f3cfc",
  borderRadius: 3,
  color: "#ffffff",
  padding: "10px 20px 12px",
});

export const BlockRoot = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const TextRoot = styled.p({
  color: "#666666",
  lineHeight: 1.5,
});

export const SidebarLabel = styled.div({
  background: "#1b03f1",
  color: "#ffffff",
  fontWeight: 700,
  padding: 15,
  textTransform: "uppercase",
});

export const ListLabel = styled.div({
  background: "#4f3cfc",
  color: "#ffffff",
  fontSize: ".8rem",
  padding: 15,
  textTransform: "uppercase",
});

export const TitleLabel = styled.h1({
  color: "#4f3cfc",
  margin: 0,
  padding: "20px 0 10px",
});

export const ImageLabel = styled.img({
  background: "red",
  border: "10px solid #ffffff",
});
