import styled, { createGlobalStyle } from "styled-components";
import background from "./media/background.jpg";
import { NavLink } from "react-router-dom";

export const DetailWrapper = styled.div`
  img {
    width: 200px;
    height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  p {
    text-align: center;
    font-size: 25px;
  }
`;

export const GlobalStyle = createGlobalStyle`
body {
  background: linear-gradient(rgba(234, 224, 213, 0.4), rgba(94, 80, 63, 0.4));
width:100%;
height: 100vh;
}`;

export const HomeTitle = styled.div`
  border: 20px solid ${(props) => props.theme.grey};
  width: 500px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 250px auto;

  h1 {
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 45px;
  }
`;

export const ItemWrapper = styled.div`
  border: 2px;
  width: 300px;
  height: 400px;
  padding: 2px;
  margin-top: 10px;
  img {
    width: 200px;
    height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 0.1px solid ${(props) => props.theme.bordersColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  p {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;

    &.titleStyle {
      border: 1px;
      height: 100px;
    }
    &.detailStyle {
      color: ${(props) => props.theme.grey};
    }
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const NavItem = styled(NavLink)`
  color: grey;
  font-size: 20px;

  &.active {
    color: black;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 30%;
`;
