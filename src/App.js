import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MoviesCharacters from "./components/FetchFilmsInfo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route exact path="/:id" component={MoviesCharacters} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
