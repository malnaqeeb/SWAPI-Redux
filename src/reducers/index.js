import { combineReducers } from "redux";
import films from "./films";
import characters from "./characters";
import filmdetails from "./movieInfo";

export default combineReducers({
  films,
  characters,
  filmdetails,
});
