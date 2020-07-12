import React from "react";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";

//Components
import BookList from "./Components/BookList";
import BookDetail from "./Components/BookDetail";
import RecommandedDetail from "./Components/RecommandedDetail";
import books from "./books";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "styled-components";

const theme = {
  bordersColor: "#e5e5e5",
  grey: "#6d6875",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NavBar />

      <Switch>
        <Route path="/rBooks/:rBookSlug">
          <RecommandedDetail />
        </Route>
        <Route path="/books/:bookSlug">
          <BookDetail />
        </Route>
        <Route path="/books">
          <BookList books={books} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
