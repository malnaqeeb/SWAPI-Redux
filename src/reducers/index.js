import { combineReducers } from "redux";
import films from "./films";
import characters from "./characters";

export default combineReducers({
  films,
  characters,
});
