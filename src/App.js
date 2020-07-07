import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FilmsList from "./components/filmlist/js/FilmsList";
import GetFilmInfo from "./components/film/js/GetFilmInfo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={FilmsList} />
            <Route exact path="/:id" component={GetFilmInfo} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
