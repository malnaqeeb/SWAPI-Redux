import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MoviesCharacters from "./components/MoviesCharacters";
import { Provider } from "react-redux";
import store from "./store";
import MovieInfo from "./components/MovieInfo";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route exact path="/:id" component={MoviesCharacters} />
            <Route exact path="/film/:id" component={MovieInfo} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
