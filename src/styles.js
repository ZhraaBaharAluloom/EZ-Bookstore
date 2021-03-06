import styled, { createGlobalStyle } from "styled-components";
import background from "./media/background.jpg";
import { NavLink } from "react-router-dom";

export const DetailWrapper = styled.div`
  img {
    width: 300px;
    height: 350px;
    display: flex;
    margin: 50px auto auto auto;
    padding: 15px;
  }
  p {
    text-align: center;
    font-size: 25px;
  }
  h1 {
    text-align: center;
    margin-top: 100px;
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
    display: flex;
    margin: auto;
    border: 0.1px solid ${(props) => props.theme.bordersColor};
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

export const GlobalStyle = createGlobalStyle`

body {
  background: linear-gradient(rgba(234, 224, 213, 0.4), rgba(94, 80, 63, 0.4));
height: auto;
background-attachment: fixed;
margin: 10px;
}`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
`;

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

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 4rem auto;
  display: block;
  width: 30%;
  border: 1px solid ${(props) => props.theme.grey};
`;

export const NavItem = styled(NavLink)`
  color: grey;
  font-size: 20px;

  &.active {
    color: black;
  }
`;

export const RbookDetail = styled.div`
  border: 1px solid ${(props) => props.theme.grey};
  width: 400px;
  margin: auto;
  img {
    width: 300px;
    height: 350px;
    display: flex;
    margin: 50px auto auto auto;
    padding: 15px;
  }
  p {
    text-align: center;
    font-size: 25px;
  }
  h1 {
    text-align: center;
    margin-top: 100px;
  }
`;
