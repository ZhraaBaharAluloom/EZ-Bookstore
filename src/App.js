import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";

//Components
import BookList from "./Components/BookList";
import BookDetail from "./Components/BookDetail";
import books from "./books";

function App() {
  //const book = books[0];
  const [book, setBook] = useState(books[0]);

  return (
    <>
      <Link to="/books">BOOKS</Link>

      <Switch>
        <Route path="/books/:bookSlug">
          <BookDetail />
        </Route>
        <Route path="/books">
          <BookList books={books} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
